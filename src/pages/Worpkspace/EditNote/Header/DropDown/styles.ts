import styled from "styled-components"

export const DropdownMenu = styled.button`
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

export const Wrapper = styled.nav`
margin-top: 10rem;
display: flex;
display: flex;
flex-direction: column;
`

export const DeleteButton = styled.button`
margin-top: .2rem;
color:${props => props.theme.colors.secundary};
background-color: transparent;
gap: 6rem;
border: none;
font-size: 1.2rem;
display: flex;
align-items: center;
cursor: pointer;
`

export const SeparatorA = styled.hr`
border-top: 1px solid ${props => props.theme.colors.separtor};
width: 16rem;
`

export const CreatedInfo = styled.span`
margin-top: .2rem;
font-size: 1.2rem;
display: flex;
`

export const EditedInfo = styled.span`
font-size: 1.2rem;
display: flex;
margin-bottom: .2rem;
`


/* export const NavItem = styled.div`
margin-top: .2rem;
margin-bottom: .2rem;
margin-left: .4rem;
padding: 0.2rem;
display: flex;
width: 15rem;
align-content: flex-start;
justify-content: flex-start;
`

export const SeparatorA = styled.hr`
border-top: 1px solid ${props => props.theme.colors.separtor};
width: 16rem;
`

export const DeleteButton = styled.button`
margin-top: .2rem;
color:${props => props.theme.colors.secundary};
background-color: transparent;
gap: 6rem;
border: none;
font-size: 1.2rem;
display: flex;
align-items: center;
cursor: pointer;
`

export const CreatedInfo = styled.span`
margin-top: .2rem;
font-size: 1.2rem;
display: flex;

`
export const EditedInfo = styled.span`
font-size: 1.2rem;
display: flex;
margin-bottom: .2rem;
`

 */