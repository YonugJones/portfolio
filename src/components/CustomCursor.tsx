import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '0',
        height: '0',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '16px solid var(--dark-three)',
        transform: 'translate(-40%, -70%) rotate(-45deg)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}

export default CustomCursor
