import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { extendedTheme } from './styles/extendedTheme'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
