import styled from "styled-components"


export const Wrapper = styled.div`
color:${props => props.theme.colors.secundary};
display: flex;
min-height: 100vh;

`

export const Content = styled.div`
background-color: ${props => props.theme.colors.backgroundLight};
color:${props => props.theme.colors.secundary};
display: flex;
flex-direction: column;
flex: 1;
align-content: top;
max-width: 1600;
margin: auto;
min-height: 100vh;
`

