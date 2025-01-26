import {
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from 'react'
import { gsap } from 'gsap'

import TextEffect from '../TextEffect/TextEffect'
import SocialMedia from '../SocialMedia/SocialMedia'
import ArrowDown from '../../../../../../../arrow-down.svg'
import { BsArrowDown } from 'react-icons/bs'

const texts = [
  'Full Stack Developer.',
  'Frontend Developer.',
  'Backend Developer.',
  'UI/UX Design.',
]

function Initial() {
  const [currentText, setCurrentText] = useState('')
  const [letterIndex, setLetterIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const codeTextRef = useRef(null)
  const mainTitleRef = useRef(null)
  const interativeTextRef = useRef(null)
  const contentTextRef = useRef(null)
  const linkDownRef = useRef(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentText(texts[textIndex].slice(0, letterIndex + 1))
      setLetterIndex((prev) => prev + 1)
    }, 200)

    if (letterIndex === texts[textIndex].length) {
      clearTimeout(timeout)
      setTimeout(() => {
        setLetterIndex(0)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [letterIndex, textIndex])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.4 } })
    const codeText = codeTextRef.current
    const mainTitle = mainTitleRef.current
    const interativeText = interativeTextRef.current
    const contentText = contentTextRef.current
    const linkDown = linkDownRef.current

    tl.fromTo(codeText, { opacity: 0, y: 10 }, { opacity: 1, y: 0, delay: 0.6 })
      .fromTo(mainTitle, { opacity: 0, x: -10 }, { opacity: 1, x: 0 }, '-=0.5')
      .fromTo(
        interativeText,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4 },
        '+=0.1',
      )
      .fromTo(
        contentText,
        { opacity: 0, y: 10, x: -5 },
        { opacity: 1, y: 0, x: 0 },
        '-=0.50',
      )
      .fromTo(
        linkDown,
        { opacity: 0, y: 20, scale: 0.7 },
        { opacity: 1, y: 0, scale: 1, delay: 0.5 },
        '-=0.50',
      )
  }, [])

  const handleNavigateToAboutSection = () => {
    const targetElement = document.getElementById('aboutme')

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="h-[calc(100vh_-_5rem)] w-full px-4 flex flex-col gap-3 pt-20">
      <div className="w-full flex flex-col gap-11 container-app flex-1">
        <div className="flex flex-col gap-1">
          <div className="w-full sm:w-[404px] md:w-full flex flex-col justify-center">
            <code
              className="code-font text-center sm:text-start text-sm sm:text-base"
              ref={codeTextRef}
            >
              &lt;p&gt;Hello, World!&lt;/p&gt;
            </code>
            <h1
              className="text-center sm:text-start poppins-extrabold text-[46px] sm:text-[56px] -mt-5"
              ref={mainTitleRef}
            >
              My Name is Talles Amaral
            </h1>
          </div>
          <h2
            className="poppins-bold text-[20px] sm:text-4xl text-center sm:text-start"
            ref={interativeTextRef}
          >
            I am a <TextEffect>{currentText}</TextEffect>
            <span className="cursor"></span>
          </h2>
        </div>
        <div className="w-full max-w-[740px] flex flex-col gap-2 sm:w-[404px] md:w-full">
          <span
            className="text-base sm:text-2xl text-center sm:text-start inter-font font-medium"
            ref={contentTextRef}
          >
            Web developer passionate about creating UI/UX experiences and always
            seeking new challenges to enhance my skills. With 2 years of
            experience in developing websites, my mission is to constantly
            improve my abilities to provide innovative solutions that delight
            users.
          </span>
          <SocialMedia className="flex scale-[.75] justify-center sm:justify-start sm:scale-100" />
        </div>
      </div>
      <div className=" w-full bottom-4 flex justify-center py-2">
        <button
          className="w-8 h-9 rounded-2xl bg-[#2E2E2E] flex justify-center items-center hover:bg-[#464545] transition-all"
          onClick={handleNavigateToAboutSection}
          ref={linkDownRef}
        >
          <BsArrowDown />
        </button>
      </div>
    </section>
  )
}

export default Initial
