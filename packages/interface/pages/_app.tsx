import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const isBrowser = typeof window !== 'undefined'
  return <div>{isBrowser && <Component {...pageProps} />}</div>
}

export default MyApp
