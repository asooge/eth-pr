import { Web3Provider } from '@ethersproject/providers'

export const useNetwork = (provider: Web3Provider) => {
  return {
    chainId: provider.getNetwork(),
  }
}
