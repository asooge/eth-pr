import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, Page, WalletProvider } from '../components'
import Head from 'next/head'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Page>
      <Head>
        <title>ETH PR DAO</title>
        <meta name="description" content="ETH PR DAO frontend interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WalletProvider>
        <Header />
        <Component {...pageProps} />
      </WalletProvider>
    </Page>
  )
}

export default App
