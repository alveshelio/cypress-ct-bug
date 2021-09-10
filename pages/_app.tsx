import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { auth } from '@libs/nhost'
import { NhostAuthProvider } from '@nhost/react-auth'
import customTheme from '@theme/customTheme'
import { Fonts } from '@theme/Fonts'
import { AppProps } from 'next/app'
import { ReactElement, useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const queryClientRef = useRef(null)
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  const colorModeManager =
    typeof pageProps.cookies === 'string'
      ? cookieStorageManager(pageProps.cookies)
      : localStorageManager

  return (
    <NhostAuthProvider auth={auth}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider resetCSS={true} theme={customTheme} colorModeManager={colorModeManager}>
            <Fonts />
            <Component {...pageProps} />
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </NhostAuthProvider>
  )
}

export default MyApp
