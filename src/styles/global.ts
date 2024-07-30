import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}
:focus{
    outline: 0;
    //box-shadow:  0 0 0 2px ${(props) => props.theme['green-500']};    
  
}
body{
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased; // fonte mais detalhada

}

 body, input, textarea, button{
    font: 400 0.75rem Roboto, sans-serif;
    // espessura tamanho fonte
}

`
