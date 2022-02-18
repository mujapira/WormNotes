import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
:root{
    font-size: 62.5%;
}


* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
   
}

body, input, textarea, button {
font: 400 1.6rem 'Roboto', sans-serif;
}

body {
    overflow-x: hidden;
}


`