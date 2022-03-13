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
import { useEthers } from '@usedapp/core'

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
  console.log({ account, library, active })

  const activateMetamask = () => {
    account ? deactivate() : activateBrowserWallet()
    onClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect Your Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={'12px 24px 24px 24px'}>
          <Flex direction={'column'}>
            <Button
              colorScheme={account ? 'blue' : undefined}
              mb={'16px'}
              variant={account ? 'solid' : 'outline'}
              onClick={activateMetamask}
            >
              Metamask
            </Button>
            <Button variant={'outline'}>Wallet Connect</Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
