import { onValue, ref, off, remove as fbRemove, push, update as fbUpdate } from 'firebase/database';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePersistedState } from '../hooks/usePersistedState';
import { database } from '../services/firebase';

export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

type NotesProviderProps = {
    children: ReactNode;
}

//firebase não guarda ID no objeto, guarda como chave do objeto!
type FirebaseNotes = Record<string, Omit<Note, "id">>

export type NotesData = {
    items: Note[];
    current?: Note;
    showAsHtml: boolean;
    navigate: (id: string) => void;
    create: () => void;
    update: (note: Partial<Note>) => void;
    deleteById: (note: Partial<Note>) => void;
    toggleShowAsHtml: () => void;
}

export const NotesContext = createContext<NotesData>({} as NotesData);

const UNTITLED_NOTE_TITLE = 'Untitled';

export function NotesProvider({ children }: NotesProviderProps) {
    const [current, setCurrent] = useState<Note>();
    const [notes, setNotes] = usePersistedState<Note[]>("notes", []);
    const [showAsHtml, setShowAsHtml] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const notesRef = ref(database, `users/${user?.id}/notes/`)
        //onValue observa a notesref
        onValue(notesRef, (note) => {
            //val pega a informação imediata do banco
            const databaseNote = note.val()

            //Responsavel por pegar todas as notas, incluindo 
            //a possibilidade de ser um objeto vazio
            const firebaseNotes: FirebaseNotes = databaseNote ?? {}

            //pega todas as chaves do objeto e transforma em um array
            //que será "mapado" e submetido a novos valores
            const parsedNotes = Object.entries(firebaseNotes).map(([key, value]) => {
                return {
                    ...value, //spread
                    id: key
                }
            })

            setNotes(parsedNotes)
        })
        return () => {
            off(notesRef)
        }
    }, [current, user?.id, setNotes])

    async function create(): Promise<void> {
        const dateNow = new Date();
        const note: Partial<Note> = {
            title: UNTITLED_NOTE_TITLE,
            content: '',
            createdAt: dateNow,
            updatedAt: dateNow,
        };
        await push(ref(database, `users/${user?.id}/notes/`), note)
        setShowAsHtml(false);
        const lastNote = notes[notes.length - 1]
        setCurrent(lastNote)
    }


    function navigate(id: string): void {
        const note = notes.find((note) => note.id === id);
        if (!note) return;
        setShowAsHtml(false);
        setCurrent(note);
    }

    function update(note: Partial<Note>): void {
        const now = new Date()
        if (!note.title?.trim().length) {
            note.title = UNTITLED_NOTE_TITLE
        }
        setCurrent((prevCurrent) => {
            if (!prevCurrent) return
            const updatedNote = {
                ...prevCurrent,
                ...note,
                updatedAt: now,
            }
            return updatedNote
        })
        fbUpdate(ref(database, `users/${user?.id}/notes/${note?.id}`), note)
    }

    function deleteById(note: Partial<Note>): void {
        setNotes((prevNotes) => prevNotes.filter((prevNote) => prevNote.id !== note.id))
        if (current?.id === note.id) {
            setCurrent(undefined)
            fbRemove(ref(database, `users/${user?.id}/notes/${note?.id}`))
        }
    }

    function toggleShowAsHtml(): void {
        setShowAsHtml(!showAsHtml);
    }

    return (
        <NotesContext.Provider
            value={{
                items: notes,
                current,
                showAsHtml,
                deleteById,
                create,
                navigate,
                update,
                toggleShowAsHtml,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}