import styled from "styled-components"

export const EDIT_NOTE_HEADER_HEIGHT = '10rem';

export const Header = styled.div`
display: column;
align-items: center;
padding: 1rem 2rem;
height: ${EDIT_NOTE_HEADER_HEIGHT};
`

export const UserInfo = styled.button`
display: flex;
align-items: center;
justify-content: center;
border-radius: 1rem;
background: transparent;
display:flex;
width: 2.5rem;
height: 2.5rem;
border: none;
border-radius: 5rem;
cursor: pointer;
`

export const UserImg = styled.img`
display: flex;
border-radius: 5rem;
overflow: hidden;
`

export const Title = styled.h4`
font-size: 1.8rem;
font-weight:normal;
max-width: 30rem;
text-overflow:  ellipsis;
white-space: nowrap;
overflow: hidden;
`

export const Menu = styled.nav`
display: flex;
gap: 1.5rem;

`
export const ToggleHTML = styled.button`
margin-top: -3px;

border-radius: 1rem;
width: 4rem;
height: 3rem;
background: transparent;
transition:.3s ease-in-out;
display: flex;
align-items: center;
justify-content: center;
border: none;
color:${props => props.theme.colors.secundary};
cursor: pointer;
`
export const ToggleDropDown = styled.button`
border-radius: 1rem;
width: 4rem;
height: 3rem;
background: transparent;
transition:.3s ease-in-out;
display: flex;
justify-content: center;
border: none;
color:${props => props.theme.colors.secundary};
cursor: pointer;
`

export const Um = styled.div`
display: flex;
justify-content: space-between;
`
export const Dois = styled.div`
display: flex;
justify-content: flex-end;
`

