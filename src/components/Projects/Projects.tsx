/* eslint-disable react/no-unescaped-entities */
import ProjectList from '../ProjectList/ProjectList'
import Image from 'next/image'

function Projects() {
  return (
    <section
      className="min-h-screen w-full flex px-4 flex-col items-center gap-20 mt-36 relative overflow-hidden"
      id="projects"
    >
      <div className="container-app py-8 px-4 relative">
        {/* <div className="absolute -top-[0%] -left-[50%] -z-10">
          <Image
            src="/feixe-laranja.png"
            width={800}
            height={800}
            alt="img-orange"
          />
        </div> */}
        <h2 className="inter-font font-extrabold inter-font text-[30px] sm:text-5xl text-center sm:text-start">
          PROJECTS
        </h2>
        <h6 className="inter-font font-light text-base w-full max-w-[707px] mt-2 text-center sm:text-start">
          As time has gone by, I've had the chance to create wonderful
          experiences, working on projects and advancing my personal skills.
          Below, you'll find some of my latest projects, showcasing my progress
          and commitment to excellence in software development.
          <h3 className="poppins-bold text-2xl sm:text-3xl mt-20 mb-3">
            HIGHLIGHTS
          </h3>
        </h6>
        <ProjectList />
      </div>
    </section>
  )
}

export default Projects
