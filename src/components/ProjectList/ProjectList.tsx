import { useState, useEffect } from 'react'
import ProjectItem from '../ProjectItem/ProjectItem'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { ProjectsProps } from '../Projects/Projects'

function ProjectList({ projects }: ProjectsProps) {
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
  }, [projects])

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
            project={project}
            direction={index % 2 === 0 ? 'left' : 'right'}
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
