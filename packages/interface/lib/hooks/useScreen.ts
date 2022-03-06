import { useState, useEffect } from 'react'

export const useScreen = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const syncWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', syncWidth)
    return () => window.removeEventListener('resize', syncWidth)
  }, [])

  const isMobile = width <= 650
  return {
    isMobile,
  }
}
