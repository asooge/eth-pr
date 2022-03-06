import { Button, Link } from '../../components'
import { useScreen } from '../../lib/hooks'
import React, { useEffect, useState, useRef } from 'react'
interface Props {
  children: React.ReactNode
}

const headerStyle: React.CSSProperties = {
  backgroundColor: '#2c384e' || `#282c34`,
  minHeight: `70px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: 'white',
}

const mobileHeaderStyle: React.CSSProperties = {
  backgroundColor: '#2c384e' || `#282c34`,
  minHeight: `70px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: 'white',
}

const navLinks = [
  {
    title: 'MEET',
    href: 'https://www.meetup.com/ethpuertorico/',
  },
  {
    title: 'CODE',
    href: 'https://github.com/asooge/eth-pr',
  },
  {
    title: 'GARDEN',
    href: 'https://gardens.1hive.org/#/xdai/garden/0xc6ebf5931138187349a8e73118d208cc9dcfb6ce/',
  },
]

const containerStyle: React.CSSProperties = {
  width: 'calc(100vw - 200px)',
}

const mobileMenuStyle: React.CSSProperties = {
  backgroundColor: '#2c384e',
  position: 'fixed',
  top: '70px',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '50vw',
}

export const Header: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useScreen()
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const mobileMenuRef = useRef(null)

  const callback = (e: MouseEvent) => {
    const clickInsideMenu = mobileMenuRef.current?.contains(e.target)
    if (!clickInsideMenu) {
      toggleMenu()
    }
  }

  useEffect(() => {
    const listen = () => window.addEventListener('click', callback)
    const unlisten = () => window.removeEventListener('click', callback)
    menuOpen ? listen() : unlisten()
    return unlisten
  }, [menuOpen])

  return (
    <header style={isMobile ? headerStyle : mobileHeaderStyle}>
      {isMobile && <Button onClick={toggleMenu}>Ham</Button>}
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
