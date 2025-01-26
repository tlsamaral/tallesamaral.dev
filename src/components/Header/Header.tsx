import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Logo from '../../../../../../../Logo.svg'
import Nav from '../Nav/Nav'
import MobileMenu from '../MobileMenu/MobileMenu'

function Header() {
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 10, rotate: -5 },
        { opacity: 1, y: 0, rotate: 0, duration: 0.4 },
      )
    }
  }, [])

  return (
    <header className="w-full p-4">
      <div className="container-app w-full flex justify-between items-center">
        <div>
          <img ref={logoRef} src="/Logo.svg" alt="logo" />
        </div>
        <MobileMenu />
        <Nav />
      </div>
    </header>
  )
}

export default Header
