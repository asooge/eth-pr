import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Body, Header, Image, Link, WalletButton } from '../components'
import { useWeb3Modal } from '../lib/hooks'
import { Web3Provider } from '@ethersproject/providers'
// @TODO fix types
/* tslint:disable */
const Home: NextPage = () => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal()
  return (
    <div className={styles.container}>
      <Head>
        <title>ETH PR DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header>
          <WalletButton
            provider={provider as Web3Provider}
            loadWeb3Modal={loadWeb3Modal as () => Promise<void>}
            logoutOfWeb3Modal={logoutOfWeb3Modal as () => Promise<void>}
          />
        </Header>
        <Body>
          <h1 style={{ marginBottom: '0' }}>ETH PR</h1>
          <h3>coming soon</h3>
          <Image src={'./ethereumLogo.png'} alt="react-logo" />
          <Link
            href={'https://www.meetup.com/ethpuertorico/'}
            target={'_blank'}
          >
            MEET ETH PR
          </Link>
          <Link href={'https://github.com/asooge/eth-pr'} target={'_blank'}>
            CODE
          </Link>
          {provider && (
            <iframe
              src="https://app.honeyswap.org/#/swap?outputCurrency=0x86BD4E732EEa037a39a663E0DB07346a33274364"
              height="660px"
              width="100%"
              style={{
                border: '0',
                margin: '0 auto',
                display: 'block',
                borderRadius: '10px',
                padding: '32px 0',
                maxWidth: '500px',
                minWidth: '300px',
                height: '720px',
              }}
              title="uniswap-iframe"
              id="myId"
            />
          )}
        </Body>
      </div>
    </div>
  )
}

export default Home
