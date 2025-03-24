import ExperienceItem from '../ExperienceItem/ExperienceItem'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { Experience } from '@/pages'

// import FlashPurple from '../../assets/images/feixe-roxo-right.png'

interface ExperiencesProps {
  experiences: Experience[]
}

function Experiences({ experiences }: ExperiencesProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    experiences.forEach((_, index) => {
      const experienceClass = `.experience-${index}`
      const animationProps =
        index % 2 === 0
          ? { x: -100, opacity: 0, y: 40 }
          : { x: 100, opacity: 0, y: 40 }

      gsap.fromTo(experienceClass, animationProps, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: experienceClass,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1, // adjusted scrub value
          onLeave: () => gsap.to(experienceClass, { opacity: 1, x: 0, y: 0 }), // ensure the animation completes when leaving the trigger
        },
      })
    })
  }, [experiences])

  return (
    <section
      className="w-full flex pt-4 px-4 flex-col items-center gap-20 mt-10"
      id="experiences"
    >
      <h2 className="inter-font font-extrabold inter-font text-[30px] sm:text-5xl text-center sm:text-start">
        EXPERIENCES
      </h2>
      <div className="max-w-[1146px] w-full mx-auto px-4">
        <div className="w-full flex flex-col gap-10 relative timeline-container">
          {experiences.map((exp, index, data) => (
            <div
              key={index}
              className={`relative flex max-[430px]:justify-center ${
                data.length === 1
                  ? 'justify-center'
                  : index % 2 === 0
                    ? 'flex-row'
                    : 'flex-row-reverse'
              } items-center experience-${index}`}
            >
              <div
                className={`${
                  data.length === 1 ? 'hidden' : 'hidden lg:block'
                }  w-2 h-2 rounded-full bg-white absolute right-1/2 top-3 ${
                  index === 0 ? '' : ''
                }`}
              />

              <ExperienceItem
                company={exp.company}
                position={exp.position}
                isCurrent={exp.isCurrent}
                description={exp.description}
                tags={exp.tags}
                allSpace={data.length === 1}
                startDate={exp.startDate}
                endDate={exp.endDate}
              />
            </div>
          ))}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white" />
        </div>
      </div>
    </section>
  )
}

export default Experiences
