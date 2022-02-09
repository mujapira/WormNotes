import * as S from './styles';
import WormLogo from "../../../assets/images/WormNotesLogo.svg"
import { useAuth } from '../../../hooks/useAuth';
import { useNotes } from '../../../hooks/useNotes';

export function Sidebar() {
  const notes = useNotes();

  function handleCreateNoteClick() {
    notes.create();
  }
 function handleNoteClick(id: string) {
  notes.navigate(id);
  }
 
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Logo src={WormLogo} />
          <S.Title>
           My notes</S.Title>
          <S.Separator />
          <S.NoteList>
          {notes.items.map((note) => (
            <S.NoteItem  key={note.id} onClick={() => handleNoteClick(note.id)}>
              {note.title}
            </S.NoteItem>
            ))}
            <S.NewNoteButton onClick={(handleCreateNoteClick)}>
              + Add a note
            </S.NewNoteButton>
          </S.NoteList>
        </S.Content>
      </S.Wrapper>
    </>
  )
}