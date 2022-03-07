import { createContext, useContext } from 'react'
import { useWeb3Modal } from '../../lib/hooks'

const WalletContext = createContext(undefined)

interface Props {
  children: React.ReactNode
}

export const WalletProvider: React.FC<Props> = ({ children }) => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal()
  const value = { provider, loadWeb3Modal, logoutOfWeb3Modal }
  return (
    <WalletContext.Provider
      // @ts-ignore
      value={value}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWallet must be used within a Wallet Context Provider')
  }
  return context
}
