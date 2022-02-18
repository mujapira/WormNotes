import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
width: 100%;
background-color: ${props => props.theme.colors.backgroundLight};
`

export const Editnote = styled.div`
width: 100%;
min-width: 310px;
`

export const Content = styled.div`
background: transparent;
display: flex;
flex-direction: column;
height: 85vh;
width:50%;
min-width: 300px;
margin: 0 auto;
`

export const TitleInput = styled.textarea`
width: 100%;
border:none;
background: transparent;
font-size: 4rem;
font-weight: bolder;
margin: 8rem 0 4rem;
resize: none;
outline: none;
color:${props => props.theme.colors.secundary};
`

export const ContentInput = styled.textarea`
height: 100vh;
border:none;
resize: none;
line-height: 2.4rem;
background: transparent;
outline: none;
color:${props => props.theme.colors.secundary};

`

export const ContentAsHtml = styled.div`
gap: 1rem;
display: grid;
grid-template-columns: 1fr;
&:first-child{
    margin-top: 0;
}
ul ol{
    list-style: revert;
    padding-inline-start: 18px;
}
ul input{
margin-left: -18px;
}
hr{
    border:revert;
    border-color: ${props => props.theme.colors.secundary};
}
code{
    padding: .5rem 1rem;
    border-radius: 0%.6rem;
    background: #333;
    line-height: 3rem;
}
pre{
    display: flex;
    code{
        width:100%;
        display:block;
    }
}
h1{
    padding-top: 2rem;
}
h2 {
    padding-top: 1.5rem;
}
h3 {
    padding-top: 1.2rem;
}
`