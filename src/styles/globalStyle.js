import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-family: 'Nunito', sans-serif;  
   }

   ul, li, button {
        all: unset;
   }

   button, input {
        cursor: pointer;
   }

   :root{
     --green: #15CE1E;
     --blue: #116BFA;
     --yellow: #FFEC39;
     --red: #E00500;
     --grey-1: #a0a0a0;
     --grey-2: #e9e9e9;
     --grey-3: #d3d3d3;
     --grey-4: #847f79;
     --beige: #F5F5DC;
     --black: #000000;
     --white: #FFFFFF;
   }
   
`;