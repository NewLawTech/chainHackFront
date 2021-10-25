import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MoralisProvider } from "react-moralis";

const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
})

const appId = 'PErZ0rEkdPheXUD1RoKWyJnKaeQDBqGPINzXvvDZ';
const serverUrl = 'https://u947opv0ik8y.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId= {appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}> 
          <App />
        </ChakraProvider>
      </MoralisProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
