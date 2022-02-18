import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: row;
height: 100vh;
width: 20vw;
background-color: ${props => props.theme.colors.backgroundDark};
`

export const Circle = styled.div`
background-color: ${props => props.theme.colors.primary};
border-radius: 50%;
height: 10rem;
width: 10rem;
justify-content: center;
align-items: center;
@media (max-width:640px){
    width: 6rem;
    height: 6rem;
    }
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
@media (max-width:640px){
    width: 6rem;
    height: 6rem;
    }

`
export const UserImg = styled.img`
display: flex;
width: 2rem;
border-radius: 5rem;
overflow: hidden;

`

export const Title = styled.span`
gap:5px;
display: flex;
text-align: center;
font-size:1.4rem;
margin:1.5rem;
justify-content: center;
align-items: center;
@media (max-width:640px){
    font-size: 1.2rem;
    }

`

export const NoteList = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;
`

export const NoteItem = styled.button`
color:${props => props.theme.colors.secundary};
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
@media (max-width:1300px){
    width: 15rem;
    }
    @media (max-width:650px){
    width: 10rem;
    font-size: 1.2rem;
    }
`

export const NewNoteButton = styled.button`
height: fit-content;
width: 15vw;
border-radius: 0.4rem;
padding: .5rem 2rem;
border: none;
color:${props => props.theme.colors.secundary};
background: ${props => props.theme.colors.primary};
cursor: pointer;
@media (max-width:640px){
    font-size: 1.2rem;
    }

`

export const SeparatorWrapper = styled.div`
display: flex;
width: 20vw;
justify-content: center;
align-items: center;
`

export const Separator = styled.div`
border: 1px solid ${props => props.theme.colors.separtor};
width: 100%;
height: 0.2rem;
background-color: ${props => props.theme.colors.primary};
`


