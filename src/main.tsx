import React from 'react'
import {
    ChakraProvider,
} from '@chakra-ui/react'
import theme from './theme'
import ReactDOM from 'react-dom/client'
import {
     createHashRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'


const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/rollup",
        element: <App/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
)
