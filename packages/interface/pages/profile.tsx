import type { NextPage } from 'next'
import { Body, Image } from '../components'
import { Flex, Text } from '@chakra-ui/react'
import { useEthers, useEtherBalance, useTokenBalance } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'
import { getNetworkName, getTokenName } from '../lib/helpers'
import { Web3Provider } from '@ethersproject/providers'

const Profile: NextPage = () => {
  const { account, library, chainId } = useEthers()
  const provider = library as Web3Provider
  const userBalance = useEtherBalance(account)?.toString()
  const etherBalance = formatUnits(
    userBalance?.toString() || '0',
    18,
  ).toString()
  const ricoBalanceBN = useTokenBalance(
    '0x86BD4E732EEa037a39a663E0DB07346a33274364',
    account,
  )
  const ricoBalance = formatUnits(
    ricoBalanceBN?.toString() || '0',
    18,
  ).toString()
  const networkName = getNetworkName(chainId as number)
  const walletName = provider?.provider?.isMetaMask
    ? 'Metamask'
    : 'WalletConnect'
  console.log({
    account,
    library,
    userBalance,
    etherBalance,
    ricoBalance,
    chainId,
    networkName,
  })

  return (
    <Body>
      <h1 style={{ paddingTop: '32px' }}>My Profile</h1>
      <Image src={'./ethereumLogo.png'} alt="react-logo" />

      {account ? (
        <Flex direction={'column'} maxWidth={'calc(100vw - 40px)'}>
          <Text
            pb={'24px'}
            fontSize={'24px'}
          >{`Connected via: ${walletName}`}</Text>
          <Text pb={'24px'} fontSize={'24px'}>{`Network: ${networkName}`}</Text>
          <Text pb={'24px'} fontSize={'24px'}>{`Account: ${account}`}</Text>
          <Text pb={'24px'} fontSize={'24px'}>{`${getTokenName(
            chainId as number,
          )} balance: ${etherBalance}`}</Text>
          <Text
            pb={'24px'}
            fontSize={'24px'}
          >{`RICO balance: ${ricoBalance}`}</Text>
        </Flex>
      ) : (
        <Text>Please connect wallet</Text>
      )}
    </Body>
  )
}

export default Profile
