import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [show, setShow] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent backdrop-blur-sm px-10 py-4 flex justify-end items-center`}
    >
      <ul className='flex gap-10'>
        <li className='font-normal text-[var(--dark-four)]'>About</li>
        <li className='font-normal text-[var(--dark-four)]'>Skills</li>
        <li className='font-normal text-[var(--dark-four)]'>Projects</li>
        <li className='font-normal text-[var(--dark-four)]'>Contact</li>
        <li>
          <button
            type='button'
            aria-label='Toggle dark mode'
            title='Toggle dark mode'
          >
            <FontAwesomeIcon icon={faMoon} className='w-6 h-5' />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
