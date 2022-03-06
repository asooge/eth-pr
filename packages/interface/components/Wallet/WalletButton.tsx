import React, { useState } from 'react'
import { Button } from '..'
import { Web3Provider } from '@ethersproject/providers'

interface Props {
  provider: Web3Provider
  loadWeb3Modal: () => Promise<void>
  logoutOfWeb3Modal: () => Promise<void>
}

export const WalletButton: React.FC<Props> = ({
  provider,
  loadWeb3Modal,
  logoutOfWeb3Modal,
}) => {
  const [account, setAccount] = useState('')
  const [rendered, setRendered] = useState('')
  console.log({ account, rendered })

  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal()
        } else {
          logoutOfWeb3Modal()
        }
      }}
    >
      {provider ? 'Disconnect' : 'Connect Wallet'}
    </Button>
  )
}
