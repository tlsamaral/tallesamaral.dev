import { ChevronRight } from 'lucide-react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/animate-ui/components/radix/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/utils/get-initials'

interface ExperienceItemProps {
  experience: {
    company: string
    period: string
    role: string
    location: string
    description: string[]
    avatarUrl: string | null
  }
  isLast: boolean
}

export function ExperienceItem({ experience, isLast }: ExperienceItemProps) {
  return (
    <AccordionItem
      className="border-b-0 relative group"
      value={Date.now().toString()}
    >
      <AccordionTrigger
        showArrow={false}
        className="flex gap-4 border-b-0 hover:no-underline"
      >
        <div
          className={`
            absolute top-4 left-7 mt-0.5 w-0.5 h-full bg-muted
            transition-opacity duration-300
            group-data-[state=open]:opacity-100
            ${isLast ? 'opacity-0 h-4/5' : 'opacity-100'}
          `}
        />

        <Avatar className="size-14 border">
          <AvatarFallback className="uppercase">
            {getInitials(experience.company)}
          </AvatarFallback>
          <AvatarImage
            src={experience.avatarUrl || undefined}
            alt={experience.company}
          />
        </Avatar>

        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-lg">{experience.role}</h3>

            <ChevronRight
              className="
                size-4
                -translate-x-3
                opacity-0
                scale-50
                group-hover:translate-x-0
                group-hover:opacity-100
                group-hover:scale-100
                transition-all duration-300 ease-out
                group-data-[state=open]:rotate-90
                group-data-[state=open]:translate-x-0
                group-data-[state=open]:opacity-100
                group-data-[state=open]:scale-100
              "
            />
          </div>
          <p className="text-muted-foreground">
            {experience.company} • {experience.location}
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            {experience.period}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-18">
        <ul className="list-none space-y-2 text-muted-foreground">
          {experience.description.map((d: string, i: number) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}
