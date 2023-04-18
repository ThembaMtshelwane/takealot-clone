/* 
- Responsible for rendering all of the pages
- Main entry point to the app
*/

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'


// Layout
import RootLayout from '../layouts/RootLayout'

//Pages


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
 
    <RootLayout>
            <Component {...pageProps} />
    </RootLayout>
    </ChakraProvider>
  )
}

