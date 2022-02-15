import styled from "styled-components"

export const Wrapper = styled.div`
background-color:${props => props.theme.colors.backgroundDark};
padding: 1rem;
width: 18rem;
`
export const SwtichWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
font-size: 1.2rem;
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
justify-content: center;
cursor: pointer;
width: 100%;
padding: 0.1rem;
&:hover{
background-color:${props => props.theme.colors.primary};
}
`

export const SeparatorA = styled.hr`
border-top: 1px solid ${props => props.theme.colors.separtor};
width: 16rem;
`

export const CreatedInfo = styled.span`
margin-top: .4rem;
font-size: 1.2rem;
display: flex;
font-weight: 100;
`

export const EditedInfo = styled.span`
font-weight: 100;
font-size: 1.2rem;
display: flex;
`

export const NavItem = styled.div`

`
