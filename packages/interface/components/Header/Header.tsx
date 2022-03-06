import { Button, Link, Image } from '../../components'
import { useScreen } from '../../lib/hooks'
import React, { useEffect, useState, useRef } from 'react'

interface Props {
  children: React.ReactNode
}

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
    title: 'Meet',
    href: 'https://www.meetup.com/ethpuertorico/',
  },
  {
    title: 'Code',
    href: 'https://github.com/asooge/eth-pr',
  },
  {
    title: 'DAO',
    href: 'https://gardens.1hive.org/#/xdai/garden/0xc6ebf5931138187349a8e73118d208cc9dcfb6ce/',
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

export const Header: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useScreen()
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const callback = (e: Event) => {
    const clickInsideMenu = mobileMenuRef.current?.contains(e.target as Node)
    if (!clickInsideMenu) {
      toggleMenu()
    }
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
            {isMobile && <div style={{ marginTop: '10px' }}>{children}</div>}
            {navLinks.map((link) => (
              <Link key={link.title} href={link.href} target={'_blank'}>
                <Button>{link.title}</Button>
              </Link>
            ))}
          </div>
          {!isMobile && (
            <div style={isMobile ? { marginTop: '10px' } : {}}>{children}</div>
          )}
        </>
      )}
    </header>
  )
}
