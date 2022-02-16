import styled from "styled-components"

export const EDIT_NOTE_HEADER_HEIGHT = '10rem';

export const Header = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding: 2rem;
height: ${EDIT_NOTE_HEADER_HEIGHT};

@media (max-width:1000px){
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
}
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

export const Title = styled.h4`
font-size: 1.8rem;
font-weight:normal;
max-width: 30rem;
text-overflow:  ellipsis;
white-space: nowrap;
overflow: hidden;

@media (max-width:1000px){
    max-width: 20rem;

    }
`

export const Menu = styled.nav`
display: flex;
gap: 1.5rem;
`

export const HeaderWrapper = styled.div`
display: column;
justify-content: space-evenly;


@media (max-width:1000px){
    justify-content: flex-end;
    }

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

export const WrapperClosedDropDown = styled.div`
display: flex;
justify-content: space-between;
`
export const WrapperOpenedDropDown = styled.div`
position: relative;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
`


export const SidebarButton = styled.button`
background-color:${props => props.theme.colors.secundary};
border-radius: 0.5rem;
border: none;
cursor: pointer;
position: relative;
top:0;
right: 0;
width: 3rem;
height: 2rem;
`