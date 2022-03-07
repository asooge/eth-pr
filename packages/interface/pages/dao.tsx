import type { NextPage } from 'next'
import { Body, Button, Link, Image } from '../components'

const DAO: NextPage = () => {
  return (
    <Body>
      <h1 style={{ paddingTop: '32px' }}>ETH PR - DAO</h1>
      <Image src={'./ethereumLogo.png'} alt="react-logo" />
      <Link
        href="https://gardens.1hive.org/#/xdai/garden/0xc6ebf5931138187349a8e73118d208cc9dcfb6ce/"
        target="_blank"
      >
        <Button style={{ marginTop: '20px' }}>Garden</Button>
      </Link>
    </Body>
  )
}

export default DAO
