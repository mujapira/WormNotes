import * as S from './styles';
import wormLogoImg from "../assets/images/WormNotesLogo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export function Home() {

    return (
        <S.Wrapper>
            <S.AsideDiv >
                <S.WormImage src={wormLogoImg} alt="WormNotes Logo"/>
            </S.AsideDiv>

            <S.Main>
                <S.Strong> Welcome to WormNotes</S.Strong>
                <S.P> a workspace for your notes</S.P>
                <S.Content>
                    <S.Button>
                        <S.Img src={googleIconImg} alt="Google Logo"/>
                        <S.Span>Log in to continue</S.Span>
                    </S.Button>
                </S.Content>
            </S.Main>
        </S.Wrapper>
    )

}