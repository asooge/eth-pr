import { useEthers } from '@usedapp/core'
import type { NextPage } from 'next'
import { Body, Image, useWallet } from '../components'

const Home: NextPage = () => {
  // const { provider } = useWallet()
  const { account } = useEthers()
  return (
    <Body>
      <h1 style={{ paddingTop: '32px' }}>ETH PR</h1>

      <Image src={'./ethereumLogo.png'} alt="react-logo" />

      {account ? (
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
          title="honeyswap-iframe"
        />
      ) : (
        <h3>coming soon</h3>
      )}
    </Body>
  )
}

export default Home
