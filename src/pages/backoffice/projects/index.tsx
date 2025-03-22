import type { GetServerSideProps } from 'next'
import { ProjectsTable } from './_components/projects-table'
import { prisma } from '@/lib/prisma'
import { Project } from '@/pages'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <div className="p-1">
        <h2 className="text-3xl font-bold antialiased font-mono">Projects</h2>
        <p className="font-mono mt-2 w-full max-w-3xl">
          Manage, edit, and track all your projects in one place. Use this
          section to update project details, monitor progress, and organize your
          work efficiently.
        </p>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl x-4 md:px-6 md:min-h-min bg-muted/50 border">
        <ProjectsTable projects={projects} />
      </div>
    </>
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

  return {
    props: {
      projects: serializedProjects,
    },
  }
}
