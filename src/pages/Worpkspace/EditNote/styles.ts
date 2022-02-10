import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
background-color: ${props => props.theme.colors.backgroundLight};
`
export const ScrollContainer = styled.div`

` 

export const Content = styled.div`

`

export const TextArea = styled.textarea`
background: transparent;
font-size: 1.6rem;
width: 100%;
height: 100%;
resize: none;
`

export const TitleInput = styled.textarea`
font-size: 4rem;
font-weight: bolder;
margin: 8rem 0 4rem;
`

export const ContentInput= styled.textarea`
flex: 1;
line-height: 2.4rem;

`

export const ContentAsHtml= styled.div`

`