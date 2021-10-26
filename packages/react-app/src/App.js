import React from 'react'
import { readOnChainData } from './lib/default'

import { Body, Button, Header, Image, Link, WalletButton } from './components'
import logo from './ethereumLogo.png'
import useWeb3Modal from './hooks/useWeb3Modal'

function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal()

  return (
    <div>
      <Header>
        <WalletButton
          provider={provider}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
      </Header>
      <Body>
        <h1 style={{ marginBottom: '0' }}>ETH PR</h1>
        <h3>coming soon</h3>
        <Image src={logo} alt="react-logo" />
        <Button hidden onClick={() => readOnChainData()}>
          Read On-Chain Balance
        </Button>
        <Link href={'https://www.meetup.com/ethpuertorico/'} target={'_blank'}>
          MEET ETH PR
        </Link>
        <Link href={'https://github.com/asooge/eth-pr'} target={'_blank'}>
          CODE
        </Link>
        {provider && (
          <iframe
            src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
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
  )
}

export default App
