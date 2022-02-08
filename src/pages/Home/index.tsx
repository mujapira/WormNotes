import * as S from './styles';
import wormLogoImg from "../../assets/images/WormNotesLogo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export function Home() {
    const { signInWithGoogle, user } = useAuth();
    let navigate = useNavigate()

    function handleLogIn() {
        signInWithGoogle(() => {
            navigate(`workspace`)
        })
    }

    return (
        <S.Wrapper>
            <S.AsideDiv >
                <S.WormImage src={wormLogoImg} alt="WormNotes Logo" />
            </S.AsideDiv>
            <S.Main>
                <S.Strong> Welcome to WormNotes</S.Strong>
                <S.P> a workspace for your notes</S.P>
                <S.Content>
                    <S.Button onClick={handleLogIn}>
                        <S.Img src={googleIconImg} alt="Google Logo" />
                        <S.Span>Log in to continue</S.Span>
                    </S.Button>
                </S.Content>
            </S.Main>
        </S.Wrapper>
    )
}