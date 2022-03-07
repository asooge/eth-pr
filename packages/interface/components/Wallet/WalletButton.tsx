import React, { useState } from 'react'
import { Button } from '..'
import { Web3Provider } from '@ethersproject/providers'

interface Props {
  provider: Web3Provider
  loadWeb3Modal: () => Promise<void>
  logoutOfWeb3Modal: () => Promise<void>
  style?: React.CSSProperties
}

export const WalletButton: React.FC<Props> = ({
  provider,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  style = {},
}) => {
  const [account, setAccount] = useState('')
  const [rendered, setRendered] = useState('')

  return (
    <Button
      style={style}
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
