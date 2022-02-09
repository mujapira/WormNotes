import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
width: 30rem;
background-color: ${props => props.theme.colors.backgroundLight};
border-right: 2px solid ${props => props.theme.colors.primary};
`

export const Content = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
flex-direction: column;
align-items: center;
`

export const Logo = styled.img`
width: 100px;
width: 100px;
`

export const Title = styled.h3`
text-align: center;
font-size:2rem;
margin:2rem;
justify-content: center;
align-items: center;
`



export const NoteList = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;
`

export const NoteItem = styled.button`
text-align: center;
width: 100%;
height: 4rem;
background: transparent;
max-width: 26rem;
margin: auto;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
border: none;
`

export const NewNoteButton = styled.button`
height: 4rem;
width: fit-content;
border-radius: 0.4rem;
padding: 0 2rem;
border: none;
background: ${props => props.theme.colors.primary};
cursor: pointer;
`
export const Separator = styled.hr`

border-top: 1px solid ${props => props.theme.colors.primary};
width: 30rem;

`


