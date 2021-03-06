import styled from "styled-components"

export const WrapperCreate = styled.div`
display: flex;
`

export const Wrapper = styled.div`
display: flex;
flex: 1;
width: 100%;
margin-top: -4.8rem;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 100;
padding: 5rem;
justify-content: center;
align-items: center;
`

export const Title = styled.h1`
text-align: center;
font-size:4rem;
margin-top: 2rem;
padding-bottom: 20rem;
`

export const Button = styled.button`
width: 20rem;
height: 4.8rem;
font-size: 1.6rem;
border: none;
border-radius: 0.5rem;
background-color: ${props => props.theme.colors.primary};
color: ${props => props.theme.colors.secundary};
font-weight: bold;
margin-top: 2rem;
cursor:pointer;
`