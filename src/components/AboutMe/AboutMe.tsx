import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import {
  GridComponent,
  ImageArea,
  TextArea,
  SubTextArea,
  FooterTextArea,
  StrongText,
} from './style'

function AboutMe() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById('secondSection')
      if (secondSection) {
        const rect = secondSection.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight
        setShowScrollToTop(isVisible)
      } else {
        setShowScrollToTop(window.scrollY > window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [imageSrc, setImageSrc] = useState('/my-profile-g.png') // Imagem padrão

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 530) {
        setImageSrc('/my-profile-p.png')
      } else if (window.innerWidth <= 834) {
        setImageSrc('/my-profile-m.png')
      } else {
        setImageSrc('/my-profile-g.png')
      }
    }

    updateImage() // Chama na montagem
    window.addEventListener('resize', updateImage) // Atualiza ao redimensionar

    return () => window.removeEventListener('resize', updateImage) // Remove o evento ao desmontar
  }, [])

  return (
    <section
      className="min-h-screen h-auto w-full relative flex items-center"
      id="aboutme"
    >
      <div className="container-app py-8 px-4 w-full">
        <GridComponent>
          <ImageArea>
            <Image
              src={imageSrc}
              alt="Profile Image"
              className="w-full h-full object-cover sm:rounded-lg"
              width={500} // Ajuste conforme necessário
              height={500} // Ajuste conforme necessário
              sizes="(max-width: 530px) 100vw, (max-width: 834px) 50vw, (max-width: 1050px) 33vw"
              priority
            />
          </ImageArea>
          <TextArea>
            <h2 className="inter-font font-extrabold text-[30px] sm:text-5xl text-center sm:text-start">
              ABOUT ME
            </h2>
            <div className="flex flex-col gap-3">
              <p className="inter-font font-medium min-[769px]:text-2xl text-[20px] text-center sm:text-start">
                Born in Potim, Brazil, I am{' '}
                <StrongText>21 years old</StrongText> and currently pursuing a
                degree in <StrongText>Computer Engineering</StrongText> at
                Centro Universitário Salesiano de São Paulo (UNISAL). My
                interest in programming sparked at the age of{' '}
                <StrongText>14</StrongText> when I began exploring codes for
                game servers out of pure curiosity. However, it was around{' '}
                <StrongText>mid-2022</StrongText>
                when I decided to fully dedicate myself to this field and become
                a programmer.
              </p>
              <p className="inter-font font-medium min-[769px]:text-2xl text-[20px] text-center sm:text-start">
                Since then, I have been constantly striving to develop and
                enhance my skills in{' '}
                <StrongText>software development</StrongText>. Through courses,
                personal projects, and academic experiences, I have been
                building a strong foundation in{' '}
                <StrongText>programming and problem-solving</StrongText>.
              </p>
              <p className="inter-font font-medium min-[769px]:text-2xl text-[20px] text-center sm:text-start">
                My goal is to become a{' '}
                <StrongText>talented software developer</StrongText> capable of
                tackling complex challenges, thus contributing to the creation
                of innovative and impactful solutions in the technology sector.
              </p>
            </div>
          </TextArea>
          <SubTextArea>
            <h3 className="inter-font font-extrabold text-[22px] sm:text-[32px] text-center sm:text-start">
              Professional and Inspirational Goal
            </h3>
            <p className="inter-font font-medium min-[769px]:text-2xl text-[20px] w-full max-w-[1000px] text-center sm:text-start">
              I aim to become a <StrongText>great developer</StrongText> capable
              of making a difference in my community. I believe that achieving
              our dreams only requires dreaming and believing, and I want to
              demonstrate that through my work and dedication.
            </p>
          </SubTextArea>
          <FooterTextArea>
            <code className="code-font text-xs sm:text-base opacity-50 sm:text-start">
              &lt;p&gt;
              <StrongText>
                Building the future, one line of code at a time
              </StrongText>
              . 🌪️&lt;/p&gt;
            </code>
          </FooterTextArea>
        </GridComponent>
      </div>
      <button
        onClick={scrollToTop}
        className={`${
          showScrollToTop
            ? 'translate-y-0 opacity-100'
            : 'translate-y-[150%] opacity-0'
        } fixed bottom-7 right-4 p-3 bg-[#2E2E2E] text-white rounded-full shadow-lg hover:bg-white/50 transition-all duration-300 z-50`}
      >
        <FaArrowUp />
      </button>
    </section>
  )
}

export default AboutMe
