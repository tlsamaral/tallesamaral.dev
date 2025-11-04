import { ChevronRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/animate-ui/components/radix/accordion'
import { Separator } from '@/components/ui/separator'
import { EducationItem } from './components/education-item'
import { SectionTitle } from './components/section-title'

export type EducationItemProps = {
  institution: string
  degree: string
  period: string
  location?: string
  description: string[]
  avatarUrl: string | null
  certificateUrl: string | null
}

interface EducationSectionProps {
  t: {
    education: {
      title: string
      subtitle: string
      formal: {
        label: string
        items: EducationItemProps[]
      }
      courses: {
        label: string
        items: EducationItemProps[]
      }
    }
  }
}

export function EducationSection({ t: { education } }: EducationSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <SectionTitle>{education.title}</SectionTitle>
        <p className="text-muted-foreground">{education.subtitle}</p>
      </div>

      <Separator />

      <div className="space-y-2">
        {education.formal.items.map((item, i) => (
          <EducationItem key={i} item={item} />
        ))}
      </div>

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="courses" className="group">
            <AccordionTrigger
              showArrow={false}
              className="flex gap-4 border-b-0 hover:no-underline py-0"
            >
              <div className="flex gap-2 items-center">
                <ChevronRight
                  className="
                  size-4
                  group-hover:scale-100
                  transition-all duration-300 ease-out
                  group-data-[state=open]:rotate-90
                  "
                />
                <h3 className="font-semibold text-lg">
                  {education.courses.label} ({education.courses.items.length})
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="space-y-2 mt-2">
                {education.courses.items.map((item, i) => (
                  <EducationItem key={i} item={item} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Separator />
    </section>
  )
}
