import { getChainById } from '@usedapp/core'

export const getNetworkName = (chainId: number) => {
  const chain = getChainById(chainId)
  console.log({ chain })
  return chain?.chainName || chainId
}

export const getTokenName = (chainId: number) => {
  if (chainId === 1) {
    return 'ETH'
  }
  if (chainId === 56) {
    return 'BNB'
  }
  if (chainId === 137 || chainId === 80001) {
    return 'Matic'
  }
  if (chainId === 100) {
    return 'xDai'
  }
  if (chainId === 43114) {
    return 'AVAX'
  }
  if (chainId === 1666600000) {
    return 'ONE'
  }

  if (getNetworkName(chainId) === chainId) {
    return 'Native token'
  }
  return 'ETH'
}
