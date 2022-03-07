import type { NextPage } from 'next'
import { Body, Button, Link, Image } from '../components'

const Code: NextPage = () => {
  return (
    <Body>
      <h1 style={{ paddingTop: '32px' }}>ETH PR - Code</h1>
      <Image src={'./ethereumLogo.png'} alt="react-logo" />
      <Link href="https://github.com/asooge/eth-pr" target="_blank">
        <Button style={{ marginTop: '20px' }}>Github</Button>
      </Link>
    </Body>
  )
}

export default Code
