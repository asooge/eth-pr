import type { NextPage } from 'next'
import { Body, Button, Link, Image } from '../components'

const Meet: NextPage = () => {
  return (
    <Body>
      <h1 style={{ paddingTop: '32px' }}>ETH PR - Meet</h1>
      <Image src={'./ethereumLogo.png'} alt="react-logo" />
      <Link href="https://www.meetup.com/ethpuertorico/" target="_blank">
        <Button style={{ marginTop: '20px' }}>Meetup</Button>
      </Link>
    </Body>
  )
}

export default Meet
