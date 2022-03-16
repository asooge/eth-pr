import { Button } from '..'
import { WalletModal } from './WalletModal'
import { useDisclosure } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

interface Props {
  style?: React.CSSProperties
}

export const WalletButton: React.FC<Props> = ({ style = {} }) => {
  const { account, deactivate } = useEthers()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        style={{ minWidth: '155px', ...style }}
        onClick={account ? deactivate : onOpen}
      >
        {account ? 'Disconnect' : 'Connect Wallet'}
      </Button>
      <WalletModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}
