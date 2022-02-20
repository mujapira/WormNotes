import * as S from './styles';
import WormLogo from "../../../../assets/images/MinhocaFundoless.png"
import { useNotes } from '../../../../hooks/useNotes';
import { useAuth } from '../../../../hooks/useAuth';
import { useSidebar } from '../../../../hooks/useSidebar';

export function Sidebar() {
  const notes = useNotes();
  const userinfo = useAuth()
  const sidebarState = useSidebar()

  function handleCreateNoteClick() {
    notes.create();
  }
  function handleNoteClick(id: string) {
    notes.navigate(id);
  }


  return (
    <>

      {sidebarState.sidebar === true &&
        <S.Wrapper>
          <S.Content>
            <S.Circle>
              <S.Logo src={WormLogo} />
            </S.Circle>
            <S.Title>
              <S.UserImg src={userinfo.user?.avatar} />
              <span>
                {userinfo.user?.name}
              </span>
            </S.Title>
            <S.SeparatorWrapper>
              <S.Separator />
            </S.SeparatorWrapper>

            <S.NoteList>
              {notes.items.map((note) => (
                <S.NoteItem key={note.id} onClick={() => handleNoteClick(note.id)}>
                  {note.title}
                </S.NoteItem>
              ))}
            </S.NoteList>
            <S.NewNoteButton onClick={(handleCreateNoteClick)}>
              + Add a note
            </S.NewNoteButton>
          </S.Content>
        </S.Wrapper>
      }
    </>
  )
}