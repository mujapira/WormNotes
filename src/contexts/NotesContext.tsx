import { onValue, ref, off, set, push } from 'firebase/database';
import { createContext, ReactNode, useEffect, useState } from 'react';
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
    create: () => void;
    current?: Note;
    navigate: (id: string) => void;
    showAsHtml: boolean;

    /*
       update: (note: Partial<Note>) => void;
       deleteById: (id: string) => void;
       toggleShowAsHtml: () => void; */
}

export const NotesContext = createContext<NotesData>({} as NotesData);

const UNTITLED_NOTE_TITLE = 'Untitled';

export function NotesProvider({ children }: NotesProviderProps) {
    const [current, setCurrent] = useState<Note>();
    const [notes, setNotes] = useState<Note[]>([]);
    const [showAsHtml, setShowAsHtml] = useState(false);

    useEffect(() => {
        const notesRef = ref(database, `notes/`)
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

            const lastNote = parsedNotes[parsedNotes.length - 1]
            setNotes(parsedNotes)
            setCurrent(lastNote)
        })
        return () => {
            off(notesRef)
        }
    }, [])

    function create(): void {
        const dateNow = new Date();
        const note: Partial<Note> = {
            title: UNTITLED_NOTE_TITLE,
            content: '',
            createdAt: dateNow,
            updatedAt: dateNow,
        };
        push(ref(database, 'notes/'), note)
    }

    
  function navigate(id: string): void {
    const note = notes.find((note) => note.id === id);
    if (!note) return;
    setShowAsHtml(false);
    setCurrent(note);
  }


    return (
        <NotesContext.Provider
            value={{
                items: notes,
                current,
                create,
                navigate,
                showAsHtml,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}