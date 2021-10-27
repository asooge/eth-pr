import React, { useEffect, useState } from 'react'
import { Button } from '../'
import { fetchAccount } from '@project/react-app/src/lib/default'

export function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState('')
  const [rendered, setRendered] = useState('')

  useEffect(() => {
    fetchAccount(provider, account, setAccount, setRendered)
  }, [account, provider, setAccount, setRendered])

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
      {rendered === '' && 'Connect Wallet'}
      {rendered !== '' && rendered}
    </Button>
  )
}
