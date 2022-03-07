import { useState, useEffect } from 'react'

export const useScreen = (defaultWidth: number) => {
  const [width, setWidth] = useState(0)
  const syncWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    syncWidth()
    window.addEventListener('resize', syncWidth)
    return () => {
      window.removeEventListener('resize', syncWidth)
    }
  }, [])

  const mobileWidth = defaultWidth || 650
  const isMobile = width <= mobileWidth
  return {
    isMobile,
  }
}
