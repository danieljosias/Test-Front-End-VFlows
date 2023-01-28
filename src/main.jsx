import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/globalStyle'
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from './contexts/Users/userContext';
import { ContractContextProvider } from './contexts/Contracts/contractContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <GlobalStyle/>
      <UserContextProvider>
        <ContractContextProvider>
          <App />
        </ContractContextProvider>
      </UserContextProvider>
    </BrowserRouter>
)
