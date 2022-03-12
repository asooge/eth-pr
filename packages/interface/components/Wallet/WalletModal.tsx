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

interface Props {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const WalletModal: React.FC<Props> = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect Your Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={'12px 24px 24px 24px'}>
          <Flex direction={'column'}>
            <Button mb={'16px'} variant={'outline'}>
              Metmask
            </Button>
            <Button variant={'outline'}>Wallet Connect</Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
