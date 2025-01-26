import ExperienceItem from '../ExperienceItem/ExperienceItem'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

// import FlashPurple from '../../assets/images/feixe-roxo-right.png'

const experiences = [
  {
    company: 'Editora Santuário',
    position: 'Junior Development Analyst',
    description:
      'At Editora Santuário, I had the opportunity to work on challenging projects. My main activities included the development of web applications and APIs, server connection, creation of FTP server connection projects, and job execution. Additionally, I contributed to the development of internal applications, such as the Intranet Portal. I also gained experience in database connection, migration creation, and web service implementation. My knowledge spans both front-end and back-end.',
    tags: [
      'Web Development',
      'API',
      'Database Connection',
      'Full Stack',
      'C#',
      'HTML',
      'CSS',
      'JavaScript',
      'Jquery',
    ],
    startDate: 'April 2023',
    endDate: 'Present',
  },
]

function Experiences() {
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
  }, [])

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
              ></div>

              <ExperienceItem
                company={exp.company}
                position={exp.position}
                description={exp.description}
                tags={exp.tags}
                allSpace={data.length === 1}
                startDate={exp.startDate}
                endDate={exp.endDate}
              />
            </div>
          ))}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white"></div>
        </div>
      </div>
      {/* <div className="absolute -right-0 -bottom-[50%] -z-10" tabIndex={-1}>
        <Image
          src="/feixe-roxo-right.png"
          width={800}
          height={800}
          alt="flash"
        />
      </div> */}
    </section>
  )
}

export default Experiences
