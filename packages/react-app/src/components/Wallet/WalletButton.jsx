import React, { useEffect, useState } from 'react'
import { Button } from '../'
import { fetchAccount } from '@eth-pr/react-app/src/lib/default'

/* eslint react/prop-types: 0 */
export function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState('')
  const [rendered, setRendered] = useState('')
  console.log({ account, rendered })
  // useEffect(() => {
  //   fetchAccount(provider, account, setAccount, setRendered)
  // }, [account, provider, setAccount, setRendered])

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
