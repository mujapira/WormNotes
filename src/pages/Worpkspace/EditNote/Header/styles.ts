import styled from "styled-components"




export const EDIT_NOTE_HEADER_HEIGHT = '5rem';

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: ${EDIT_NOTE_HEADER_HEIGHT};
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

`
export const MenuButton= styled.button`
border-radius: 1rem;
width: 4rem;
height: 3rem;
background: transparent;
transition:.3s ease-in-out;
display: flex;
align-items: center;
justify-content: center;
`


