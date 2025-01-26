import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'

import { NavMenu } from './style'
import { AppContext } from '../../context/AppContext'

function Nav() {
  const aboutMeRef = useRef<HTMLLIElement>(null)
  const experiencesRef = useRef<HTMLLIElement>(null)
  const projectsRef = useRef<HTMLLIElement>(null)
  const contactRef = useRef<HTMLLIElement>(null)

  const { activeMenu, setActiveMenu } = useContext(AppContext)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setActiveMenu(false)
    const targetId = e.currentTarget.getAttribute('href')?.slice(1)
    const targetElement = document.getElementById(targetId || '')
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.4 } })
    tl.fromTo(
      aboutMeRef.current,
      { opacity: 0, y: 10, rotate: -5 },
      { opacity: 1, y: 0, rotate: 0, delay: 0.5 },
      '-=0.2',
    )
      .fromTo(
        experiencesRef.current,
        { opacity: 0, y: 10, rotate: -5 },
        { opacity: 1, y: 0, rotate: 0 },
        '-=0.2',
      )
      .fromTo(
        projectsRef.current,
        { opacity: 0, y: 10, rotate: -5 },
        { opacity: 1, y: 0, rotate: 0 },
        '-=0.2',
      )
      .fromTo(
        contactRef.current,
        { opacity: 0, y: 10, rotate: -5 },
        { opacity: 1, y: 0, rotate: 0 },
        '-=0.2',
      )
  }, [])

  return (
    <NavMenu className={`${activeMenu ? 'active' : ''}`}>
      <ul className="flex gap-7">
        <li ref={aboutMeRef}>
          <a className="text-2xl" href="#aboutme" onClick={handleClick}>
            About me
          </a>
        </li>
        <li ref={experiencesRef}>
          <a className="text-2xl" href="#experiences" onClick={handleClick}>
            Experiences
          </a>
        </li>
        <li ref={projectsRef}>
          <a className="text-2xl" href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li ref={contactRef}>
          <a className="text-2xl" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </NavMenu>
  )
}

export default Nav
