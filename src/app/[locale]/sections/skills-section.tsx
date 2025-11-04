'use client'

import { Accordion } from '@/components/animate-ui/components/radix/accordion'
import { AccordionSkillItem } from './components/accordion-skill-item'
import { SectionTitle } from './components/section-title'

interface Skill {
  name: string
  icon: string
  projects: number
}

interface SkillCategory {
  label: string
  stacks: Skill[]
}

interface SkillsProps {
  t: {
    skills: {
      title: string
      subtitle: string
      categories: Record<string, SkillCategory>
    }
  }
}

export function SkillsSection({ t: { skills } }: SkillsProps) {
  const categories = Object.entries(skills.categories)

  return (
    <section className="space-y-6">
      <div>
        <SectionTitle>{skills.title}</SectionTitle>
        <p className="text-muted-foreground">{skills.subtitle}</p>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {categories.map(([key, category]) => (
          <AccordionSkillItem key={key} category={category} />
        ))}
      </Accordion>
    </section>
  )
}
