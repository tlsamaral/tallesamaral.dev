import React, { useEffect, useRef, useContext } from 'react'
import { FaBurger } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { gsap } from 'gsap'
import { AppContext } from '../../context/AppContext'

function MobileMenu() {
  const { activeMenu, setActiveMenu } = useContext(AppContext)
  const buttonRef = useRef(null)

  const handleClick = () => {
    setActiveMenu(!activeMenu)
  }

  useEffect(() => {
    if (buttonRef.current) {
      // Cria uma animação de "piscar" no botão
      gsap.fromTo(
        buttonRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 0.2, repeat: 1, yoyo: true },
      )
    }
  }, [activeMenu])

  return (
    <button
      className="min-[568px]:hidden"
      onClick={handleClick}
      ref={buttonRef}
    >
      {!activeMenu ? <FaBurger size={26} /> : <IoClose size={26} />}
    </button>
  )
}

export default MobileMenu
