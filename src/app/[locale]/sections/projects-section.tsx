'use client'

import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SectionTitle } from './components/section-title'

interface ProjectItem {
  title: string
  description: string
  stacks: string[]
  repoUrl?: string | null
  previewUrl?: string | null
  image?: string
}

interface ProjectsProps {
  t: {
    projects: {
      title: string
      subtitle: string
      items: ProjectItem[]
    }
  }
}

export function ProjectsSection({ t: { projects } }: ProjectsProps) {
  return (
    <section className="space-y-8">
      <div>
        <SectionTitle>{projects.title}</SectionTitle>
        <p className="text-muted-foreground">{projects.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.items.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex flex-col overflow-hidden rounded-2xl border bg-card hover:bg-accent/5 shadow-sm hover:shadow-md transition-all"
          >
            {project.image && (
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            <div className="flex flex-col flex-1 p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground/90">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="text-xs px-2 py-1 rounded-md bg-accent/10 border border-border/30 text-foreground/70"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {(project.repoUrl || project.previewUrl) && (
                <div className="flex gap-2 mt-auto">
                  {project.previewUrl && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex items-center gap-1 text-xs"
                      onClick={() =>
                        window.open(
                          project.previewUrl!,
                          '_blank',
                          'noopener,noreferrer',
                        )
                      }
                    >
                      <ExternalLink className="size-4" />
                      Live Preview
                    </Button>
                  )}

                  {project.repoUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 text-xs"
                      onClick={() =>
                        window.open(
                          project.repoUrl!,
                          '_blank',
                          'noopener,noreferrer',
                        )
                      }
                    >
                      <Github className="size-4" />
                      Repository
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
