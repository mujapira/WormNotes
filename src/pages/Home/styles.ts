import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    font-size: 1.6rem;
    background: ${props => props.theme.colors.backgroundDark};
    color: ${props => props.theme.colors.secundary};

    @media (max-width:1000px){
        flex-direction: column;
        text-align: center;
    }
`

export const AsideDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (max-width:1000px){
      flex: unset;
      width: 100vw;
      height:40vh;
    }
`

export const WormImage = styled.img`
    max-width: 40%;
    height: 100%;
    padding:10px;

    @media (max-width:1000px){
        max-width: 40%;
        height: 100%;
        padding:10px;
    }
`

export const Main = styled.div`
    background: ${props => props.theme.colors.backgroundLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 5rem;
    @media (max-width:1000px){
        padding:50px;
    }

`

export const Strong = styled.strong`
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
`

export const P = styled.p`
    font-size: 2rem;
      line-height: 32px;
      margin-top: 16px;
`

export const Content = styled.div`
`

export const Button = styled.button` 
    &:hover {
    filter: brightness(0.8)}
    line-height: 32px;
    margin-top: 30px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 500;
    border: none;
`

export const Span = styled.span`
    margin-right: 8px;
    font-size: 1.2rem;
	font-weight: 300;
    color: ${props => props.theme.colors.secundary};
`

export const Img = styled.img`
    margin-left: 8px;
    margin-right: 8px;

`





