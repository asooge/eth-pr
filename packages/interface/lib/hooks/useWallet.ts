import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'

import { useEffect, useMemo, useState } from 'react'

const infuraId = '3d4b1bc7b32f4f7ab78535b425450e8d'
const rpc = {
  [1]: 'https://mainnet.infura.io/v3/3d4b1bc7b32f4f7ab78535b425450e8d',
  [137]:
    'https://polygon-mainnet.infura.io/v3/3d4b1bc7b32f4f7ab78535b425450e8d',
  [80001]:
    'https://polygon-mumbai.infura.io/v3/3d4b1bc7b32f4f7ab78535b425450e8d',
}

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: { infuraId },
    rpc,
  },
}

export const useWallet = () => {
  const [provider, setProvider] = useState<Web3Provider>()
  const [address, setAddress] = useState<string>()
  const [chainId, setChainId] = useState<number>()
  const web3Modal = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions,
      })
    }
  }, [])

  const updateAddress = async () => {
    if (provider) {
      const address = await provider?.getSigner().getAddress()
      address && setAddress(address)
    }
  }

  const updateChainId = async () => {
    if (provider) {
      const { chainId } = await provider.getNetwork()
      setChainId(chainId)
    }
  }

  console.log({ provider, web3Modal, address, chainId })

  useEffect(() => {
    if (provider) {
      updateChainId()
      updateAddress()
    }
  }, [provider])

  const activate = async () => {
    const connector = await web3Modal?.connect()
    connector.on('accountsChanged', (accounts: string[]) => {
      setAddress(accounts[0])
    })
    connector.on('chainChanged', (chainId: string) => {
      setChainId(parseInt(chainId))
    })
    const provider = new Web3Provider(connector)
    setProvider(provider)
  }

  const deactivate = async () => {
    // const address = await provider?.getSigner().getAddress()
    await web3Modal?.clearCachedProvider()
    setProvider(undefined)
    setAddress(undefined)
  }

  return {
    provider,
    account: address,
    chainId,
    activate,
    deactivate,
  }
}
