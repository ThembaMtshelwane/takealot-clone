/* 
- Responsible for rendering all of the pages
- Main entry point to the app
*/

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import {router} from '../Routes/index'
import ReactDOM from 'react-dom/client'

// Layout
import RootLayout from '../layouts/RootLayout'
import { RouterProvider } from 'react-router-dom'


//Pages


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
    <RootLayout>
      <Component {...pageProps} />
      {/* <RouterProvider router={router}/> */}
     </RootLayout>
    </ChakraProvider>
  )
}

