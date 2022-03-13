import type { NextPage } from 'next'
import { Body, Image } from '../components'
import { ProfileInfo } from '../components/Profile'

const Profile: NextPage = () => {
  return (
    <Body>
      <h1 style={{ paddingTop: '32px' }}>My Profile</h1>
      <Image src={'./ethereumLogo.png'} alt="react-logo" />

      <ProfileInfo />
    </Body>
  )
}

export default Profile
