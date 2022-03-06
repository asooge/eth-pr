import '../styles/globals.css'
import type { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const isBrowser = typeof window !== 'undefined'
  return <div>{isBrowser && <Component {...pageProps} />}</div>
}

export default App
