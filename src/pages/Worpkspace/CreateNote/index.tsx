import { useAuth } from '../../../hooks/useAuth';
import { useNotes } from '../../../hooks/useNotes';
import * as S from './styles';

export function CreateNote() {
    const notes = useNotes()
    const { user } = useAuth()
    const { signInWithGoogle } = useAuth();

    async function handleLogin() {
        if (!user) {
            await signInWithGoogle();
        }
    }

    function handleCreateNoteClick() {
        notes.create()
    }

    return (
        <>
            <S.Title> WormNotes</S.Title>
            <S.Wrapper>
                {!user &&
                    <>
                        <h3>Please, login to continue</h3>
                        <S.Button onClick={handleLogin}>LogIn with Google
                        </S.Button>
                    </>
                }
                {user &&
                    <>
                        <h3>Open a note at the side bar or create a new one</h3>
                        <S.Button onClick={handleCreateNoteClick}>Create Note
                        </S.Button>
                    </>
                }
            </S.Wrapper>
        </>



    )
}