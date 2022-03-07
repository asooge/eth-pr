import { Button, Image, WalletButton, useWallet } from '../../components'
import { useRouter } from 'next/router'
import { useScreen } from '../../lib/hooks'
import React, { useEffect, useState, useRef } from 'react'
import { Web3Provider } from '@ethersproject/providers'

const headerStyle: React.CSSProperties = {
  backgroundColor: '#e1bf92' || '#2c384e' || `#282c34`,
  height: `70px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: 'white',
}

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Meet',
    href: '/meet',
  },
  {
    title: 'Code',
    href: '/code',
  },
  {
    title: 'DAO',
    href: '/dao',
  },
]

const containerStyle: React.CSSProperties = {
  width: 'calc(100vw - 200px)',
}

const mobileMenuStyle: React.CSSProperties = {
  backgroundColor: '#e1bf92' || '#2c384e',
  position: 'fixed',
  top: '70px',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '50vw',
  padding: '10px 0 20px',
}

const mobileMenuButtonStyle: React.CSSProperties = {
  backgroundColor: '#f6d7b0',
  width: '70px',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
}

export const Header: React.FC = () => {
  const router = useRouter()
  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWallet()
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useScreen(705)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const callback = (e: Event) => {
    const clickInsideMenu = mobileMenuRef.current?.contains(e.target as Node)
    if (!clickInsideMenu) {
      toggleMenu()
    }
  }

  const handleNavigate = (route: string) => {
    router.push(route)
    toggleMenu()
  }

  useEffect(() => {
    const listen = () => {
      window.addEventListener('click', callback)
      window.addEventListener('scroll', callback)
    }
    const unlisten = () => {
      window.removeEventListener('click', callback)
      window.removeEventListener('scroll', callback)
    }
    menuOpen ? listen() : unlisten()
    return unlisten
  }, [menuOpen])

  return (
    <header style={headerStyle}>
      {isMobile && (
        <div style={mobileMenuButtonStyle} onClick={toggleMenu}>
          <Image
            style={{ width: '45px', height: '45px', margin: 'auto' }}
            alt="menu"
            src={'./menu-icon.png'}
          />
        </div>
      )}
      {(menuOpen || !isMobile) && (
        <>
          <div
            ref={mobileMenuRef}
            style={isMobile ? mobileMenuStyle : containerStyle}
          >
            {isMobile && (
              <div style={{ marginTop: '10px' }}>
                {
                  <WalletButton
                    provider={provider as Web3Provider}
                    loadWeb3Modal={loadWeb3Modal as () => Promise<void>}
                    logoutOfWeb3Modal={logoutOfWeb3Modal as () => Promise<void>}
                  />
                }
              </div>
            )}
            {navLinks.map((link) => (
              <Button
                key={link.title}
                onClick={() => handleNavigate(link.href)}
              >
                {link.title}
              </Button>
            ))}
          </div>
          {!isMobile && (
            <div style={isMobile ? { marginTop: '10px' } : {}}>
              {
                <WalletButton
                  provider={provider as Web3Provider}
                  loadWeb3Modal={loadWeb3Modal as () => Promise<void>}
                  logoutOfWeb3Modal={logoutOfWeb3Modal as () => Promise<void>}
                />
              }
            </div>
          )}
        </>
      )}
    </header>
  )
}
