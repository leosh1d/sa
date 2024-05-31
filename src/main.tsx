import React from 'react'
import {
    ChakraProvider,
} from '@chakra-ui/react'
import theme from './theme'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Rollup from './Rollup.tsx'
import './index.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Rollup/>,
    },
    {
        path: "/rollup",
        element: <Rollup/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <RouterProvider router={router}/>
      </ChakraProvider>
  </React.StrictMode>,
)
