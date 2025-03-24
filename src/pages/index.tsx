import AboutMe from '@/components/AboutMe/AboutMe'
import Contact from '@/components/Contact/Contact'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Initial from '@/components/Initial/Initial'
// import Projects from '@/components/Projects/Projects'
import AppProvider from '@/context/AppContext'
import { Toaster } from 'sonner'
import type { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'

const Experiences = dynamic(
  () => import('../components/Experiences/Experiences'),
  {
    ssr: false, // 🔥 Desativa SSR para evitar erro com GSAP
  },
)

const Projects = dynamic(() => import('../components/Projects/Projects'), {
  ssr: false, // 🔥 Desativa SSR para evitar erro com GSAP
})

export interface Project {
  id: string
  name: string
  description: string
  endDate: string
  banner: string
  status: boolean
  repositoryUrl: string
  appUrl: string
  createdAt: string
  tags: string[]
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
  status: true
  createdAt: string
  isCurrent: boolean
  tags: string[]
}

interface AppProps {
  projects: Project[]
  experiences: Experience[]
}

export default function Home({ experiences, projects }: AppProps) {
  return (
    <div id="app">
      <AppProvider>
        <Toaster richColors />
        <Header />
        <Initial />
        <AboutMe />
        <Experiences experiences={experiences} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.project.findMany({
    include: {
      tags: {
        select: {
          tag: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  const serializedProjects = projects.map((project) => ({
    ...project,
    startDate: project.startDate ? project.startDate.toISOString() : null,
    endDate: project.endDate ? project.endDate.toISOString() : null,
    createdAt: project.createdAt.toISOString(),
    tags: project.tags.map(({ tag }) => tag.name),
  }))

  const experiences = await prisma.experience.findMany({
    include: {
      tags: {
        select: {
          tag: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  const serializedExperiences = experiences.map((experience) => ({
    ...experience,
    startDate: experience.startDate ? experience.startDate.toISOString() : null,
    endDate: experience.endDate ? experience.endDate.toISOString() : null,
    createdAt: experience.createdAt.toISOString(),
    tags: experience.tags.map(({ tag }) => tag.name),
  }))

  return {
    props: {
      projects: serializedProjects,
      experiences: serializedExperiences,
    },
  }
}
