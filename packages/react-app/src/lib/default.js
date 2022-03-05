import { addresses, abis } from '@eth-pr/contracts'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider } from '@ethersproject/providers'

export const readOnChainData = async (provider) => {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider()
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider)
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf(
    '0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C',
  )
  console.log({ tokenBalance: tokenBalance.toString() })
}

export const fetchAccount = async (
  provider,
  account,
  setAccount,
  setRendered,
) => {
  try {
    if (!provider) {
      return
    }

    // Load the user's accounts.
    const accounts = await provider.listAccounts()
    setAccount(accounts[0])

    // Resolve the ENS name for the first account.
    const name = await provider.lookupAddress(accounts[0])

    // Render either the ENS name or the shortened account address.
    if (name) {
      setRendered(name)
    } else {
      setRendered(account.substring(0, 6) + '...' + account.substring(36))
    }
  } catch (err) {
    setAccount('')
    setRendered('')
    console.error(err)
  }
}
