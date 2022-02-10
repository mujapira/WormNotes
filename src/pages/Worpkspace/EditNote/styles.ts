import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
background-color: ${props => props.theme.colors.backgroundLight};
`
export const ScrollContainer = styled.div`

`

export const Content = styled.div`background: transparent;
display: flex;
flex-direction: column;
margin:auto;
`

export const TextArea = styled.textarea`
resize: none;
outline: none;
font-size: 1.6rem;
width: 100%;
height: 100%;
`

export const TitleInput = styled.textarea`
border:none;
background: transparent;
font-size: 4rem;
font-weight: bolder;
margin: 8rem 0 4rem;
resize: none;
outline: none;
color:${props => props.theme.colors.secundary};
`

export const ContentInput = styled.textarea`
border:none;
flex: 1;
line-height: 2.4rem;
background: transparent;
outline: none;
color:${props => props.theme.colors.secundary};

`

export const ContentAsHtml = styled.div`

`