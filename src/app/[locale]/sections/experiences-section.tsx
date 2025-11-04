import { Accordion } from '@/components/animate-ui/components/radix/accordion'
import { ExperienceItem } from './components/experience-item'
import { SectionTitle } from './components/section-title'

interface ExperiencesSectionProps {
  t: {
    experiences: {
      title: string
      items: {
        company: string
        period: string
        role: string
        location: string
        description: string[]
        avatarUrl: string | null
      }[]
    }
  }
}

export async function ExperiencesSection({ t }: ExperiencesSectionProps) {
  return (
    <section className="space-y-2">
      <SectionTitle>{t.experiences.title}</SectionTitle>

      <Accordion type="single" collapsible>
        {t.experiences.items.map((exp, index, array) => (
          <ExperienceItem
            key={index}
            experience={exp}
            isLast={index === array.length - 1}
          />
        ))}
      </Accordion>
    </section>
  )
}
