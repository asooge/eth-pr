import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Flex,
} from '@chakra-ui/react'
import { Web3Provider } from '@ethersproject/providers'
import { useEthers } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider'

const INFURA_ID = '419bd3de5eda4c1c8d452218ee1695c3'
interface Props {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const WalletModal: React.FC<Props> = ({ isOpen, onOpen, onClose }) => {
  const {
    library,
    active,
    account,
    activate,
    activateBrowserWallet,
    deactivate,
  } = useEthers()
  const provider = library as Web3Provider
  // console.log({ account, provider, active })

  const activateMetamask = () => {
    account ? deactivate() : activateBrowserWallet()
    // onClose()
  }

  const activateWalletConnect = async () => {
    if (account) return deactivate()
    const provider = new WalletConnectProvider({
      infuraId: INFURA_ID,
      rpc: {
        137: 'https://polygon-mainnet.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
        80001:
          'https://polygon-mumbai.infura.io/v3/419bd3de5eda4c1c8d452218ee1695c3',
        100: 'https://rpc.xdaichain.com/',
      },
    })
    await provider.enable()
    activate(provider as any)
  }

  const isMetamask = provider?.provider?.isMetaMask
  const metamaskActive = account && isMetamask
  const walletConnectActive = account && !isMetamask

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect Your Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={'12px 24px 24px 24px'}>
          <Flex direction={'column'}>
            <Button
              colorScheme={metamaskActive ? 'blue' : undefined}
              mb={'16px'}
              variant={metamaskActive ? 'solid' : 'outline'}
              onClick={activateMetamask}
            >
              Metamask
            </Button>
            <Button
              colorScheme={walletConnectActive ? 'blue' : undefined}
              mb={'16px'}
              variant={walletConnectActive ? 'solid' : 'outline'}
              onClick={activateWalletConnect}
            >
              Wallet Connect
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
