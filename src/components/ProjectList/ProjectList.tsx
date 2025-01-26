import { useState, useEffect } from 'react'
import ProjectItem from '../ProjectItem/ProjectItem'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FaAngleDoubleDown } from 'react-icons/fa'

interface Links {
  repository?: string
  liveDemo?: string
}

interface ProjectProps {
  title: string
  description: string
  tags: string[]
  links: Links
  image?: string
}
const projects: ProjectProps[] = [
  {
    title: 'Auto Park System',
    description:
      'Auto Park System is an intelligent parking management system that recognizes when a car enters a space and displays this information on a real-time dashboard. It allows the registration of multiple parking spaces and gates, which can be managed by the system for opening and closing. The system aims to optimize parking operations, providing an efficient and modern experience for both administrators and users.',
    tags: ['JavaScript', 'Node.js', 'React', 'Redux'],
    links: {
      repository: 'https://github.com/tlsamaral/AutoPark',
      liveDemo: 'https://auto-park.vercel.app/login',
    },
    image: '/pub-autopark.png',
  },
  {
    title: 'API Rest',
    description:
      'API Rest is a project developed for study purposes, enabling the management of students, including registering students and their photos. It uses JWT authentication and is developed in the MVC pattern, ensuring an organized and secure structure. This project highlights the application of modern API development practices, security integration, and efficient data management, making it ideal for educational and user management applications.',
    tags: ['Node.js', 'Express', 'MariaDB', 'JWT'],
    links: {
      repository: 'https://github.com/tlsamaral/api_rest',
    },
    image: '/pub-api.png',
  },
  {
    title: 'Code Flow System',
    description:
      'Code Flow System is a platform developed to promote products and systems, also offering the capability to receive client feedback. The platform integrates a chatbot that informs clients about the products, answers questions, and provides detailed information. This system is ideal for companies looking to improve customer interaction, providing an interactive and informative user experience.',
    tags: ['React', 'Node.js', 'Chatbot', 'Json-Server', 'Python'],
    links: {
      repository: 'https://github.com/tlsamaral/CodeFlow_System',
    },
    image: '/pub-codeflow.png',
  },
]

function ProjectList() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    projects.forEach((_, index) => {
      const projectClass = `.project-${index}`
      const animationProps =
        index % 2 === 0
          ? { x: -100, opacity: 0, y: 40 }
          : { x: 100, opacity: 0, y: 40 }

      gsap.fromTo(projectClass, animationProps, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: projectClass,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: 1, // adjust the scrub value to ensure the animation completes
          onLeave: () => gsap.to(projectClass, { opacity: 1, x: 0, y: 0 }), // ensure the animation completes when leaving the trigger
        },
      })
    })
  }, [])

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  return (
    <div className="w-full flex flex-col items-center">
      <ul className="flex flex-col gap-4 transition-all">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectItem
            key={index}
            className={`project-${index}`}
            project={{
              direction: index % 2 === 0 ? 'right' : 'left',
              ...project,
            }}
          />
        ))}
      </ul>
      {visibleProjects < projects.length && (
        <div className="w-full flex justify-end">
          <button
            onClick={handleShowMore}
            className="poppins-light  px-4 py-2 text-white rounded flex gap-2 justify-center items-center hover:opacity-60 transition-all mt-10"
          >
            Ver Mais
            <FaAngleDoubleDown />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectList
