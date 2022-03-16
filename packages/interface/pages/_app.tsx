import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import { Header, Page, WalletProvider } from '../components'
import Head from 'next/head'
import {
  Mainnet,
  DAppProvider,
  Ropsten,
  Kovan,
  Rinkeby,
  Config,
  Arbitrum,
  Polygon,
  Harmony,
  xDai,
} from '@usedapp/core'
import { ColorModeScript } from '@chakra-ui/color-mode'
import theme from '../theme'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
    [Ropsten.chainId]:
      'https://ropsten.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
    [Kovan.chainId]:
      'https://kovan.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
    [Rinkeby.chainId]:
      'https://rinkeby.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
    [Arbitrum.chainId]:
      'https://arbitrum-mainnet.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
    [xDai.chainId]: 'https://rpc.gnosischain.com/',
    [Polygon.chainId]:
      'https://polygon-mainnet.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
    [Harmony.chainId]: 'https://rpc.s0.t.hmny.io/',
  },
  // multicallVersion: 2,
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Page>
      <Head>
        <title>ETH PR DAO</title>
        <meta name="description" content="ETH PR DAO frontend interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider>
        <DAppProvider config={config}>
          <WalletProvider>
            <Header />
            <Component {...pageProps} />
          </WalletProvider>
        </DAppProvider>
      </ChakraProvider>
    </Page>
  )
}

export default App
