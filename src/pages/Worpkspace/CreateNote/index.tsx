import { useNotes } from '../../../hooks/useNotes';
import * as S from './styles';

export function CreateNote() {
    const notes = useNotes()

    function handleCreateNoteClick() {
        notes.create()
    }

    return (
        <>
            <S.Title> WormNotes</S.Title>
            <S.Wrapper>
                <h3>Open a note at the side bar or create a new one</h3>
                <S.Button onClick={handleCreateNoteClick}>Create Note
                </S.Button>
            </S.Wrapper>
        </>



    )
}