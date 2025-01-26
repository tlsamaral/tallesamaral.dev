import { SocialMediaContainer } from './style'
import GithubIcon from '../icons/GithubIcon'
import InstagramIcon from '../icons/InstagramIcon'
import TwitterIcon from '../icons/TwitterIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface ISocialMediaProps {
  className?: string
}

function SocialMedia({ className }: ISocialMediaProps) {
  const githubIconRef = useRef(null)
  const instagramIconRef = useRef(null)
  const twitterIconRef = useRef(null)
  const linkedinIconRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } })

    tl.fromTo(
      githubIconRef.current,
      { opacity: 0, y: 10, x: -5, scale: 0.5 },
      { opacity: 1, y: 0, x: 0, scale: 1, delay: 1.2 },
    )
      .fromTo(
        instagramIconRef.current,
        { opacity: 0, y: 10, x: -5, scale: 0.5 },
        { opacity: 1, y: 0, x: 0, scale: 1 },
      )
      .fromTo(
        twitterIconRef.current,
        { opacity: 0, y: 10, x: -5, scale: 0.5 },
        { opacity: 1, y: 0, x: 0, scale: 1 },
      )
      .fromTo(
        linkedinIconRef.current,
        { opacity: 0, y: 10, x: -5, scale: 0.5 },
        { opacity: 1, y: 0, x: 0, scale: 1 },
      )
  }, [])

  return (
    <SocialMediaContainer className={className}>
      <ul className="flex gap-2">
        <li ref={githubIconRef}>
          <a href="https://github.com/tlsamaral">
            <GithubIcon />
          </a>
        </li>
        <li ref={instagramIconRef}>
          <a href="https://www.instagram.com/tlsamaral/">
            <InstagramIcon />
          </a>
        </li>
        <li ref={twitterIconRef}>
          <a href="https://x.com/tlsamaral_">
            <TwitterIcon />
          </a>
        </li>
        <li ref={linkedinIconRef}>
          <a href="https://www.linkedin.com/in/tallesamaral/">
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </SocialMediaContainer>
  )
}

export default SocialMedia
