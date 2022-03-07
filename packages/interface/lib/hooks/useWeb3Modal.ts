import { Web3Provider } from '@ethersproject/providers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Web3Modal from 'web3modal'

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID = '419bd3de5eda4c1c8d452218ee1695c3'

const NETWORK = 'mainnet'

export function useWeb3Modal(config = {}) {
  const [provider, setProvider] = useState<Web3Provider>()
  const [autoLoaded, setAutoLoaded] = useState(false)
  const {
    autoLoad = true,
    infuraId = INFURA_ID,
    network = NETWORK,
  } = config as {
    autoLoad: boolean
    infuraId: string
    network: string
  }

  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal = useMemo(() => {
    if (typeof window === 'undefined') return {} as Web3Modal
    return new Web3Modal({
      network,
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId,
            rpc: {
              137: 'https://polygon-mainnet.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
              80001:
                'https://polygon-mumbai.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
              100: 'https://rpc.xdaichain.com/',
            },
          },
        },
      },
    })
  }, [infuraId, network])

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect()
    setProvider(new Web3Provider(newProvider))
  }, [web3Modal])

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      // window.location.reload()
      setProvider(undefined)
    },
    [web3Modal],
  )

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal()
      setAutoLoaded(true)
    }
    // @ts-ignore Property 'clearCachedProvider' does not exist on type 'Web3Provider'.ts(2339)
    return provider?.clearCachedProvider
  }, [
    autoLoad,
    autoLoaded,
    loadWeb3Modal,
    setAutoLoaded,
    web3Modal.cachedProvider,
  ])

  return [provider, loadWeb3Modal, logoutOfWeb3Modal]
}

export default useWeb3Modal
