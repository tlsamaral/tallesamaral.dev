import { Accordion } from '@/components/animate-ui/components/radix/accordion'
import { ExperienceItem } from './components/experience-item'

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
      }[]
    }
  }
}

export async function ExperiencesSection({ t }: ExperiencesSectionProps) {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-bold">{t.experiences.title}</h2>

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
