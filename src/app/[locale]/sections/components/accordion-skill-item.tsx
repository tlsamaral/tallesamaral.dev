import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/animate-ui/components/radix/accordion'

interface Skill {
  name: string
  icon: string
  projects: number
}

interface SkillCategory {
  label: string
  stacks: Skill[]
}

interface AccordionSkillItemProps {
  category: SkillCategory
}

export function AccordionSkillItem({ category }: AccordionSkillItemProps) {
  return (
    <AccordionItem className="border-b-0 relative group" value={category.label}>
      <AccordionTrigger
        showArrow={false}
        className="flex items-center justify-between border-b-0 hover:no-underline py-3"
      >
        <div className="flex items-center gap-3">
          <h3 className="font-semibold">{category.label}</h3>
          <ChevronRight
            className="
              size-4 transition-transform duration-300 ease-out
              group-data-[state=open]:rotate-90
            "
          />
        </div>

        <span className="text-muted-foreground text-sm">
          {category.stacks.length}{' '}
          {category.stacks.length === 1 ? 'stack' : 'stacks'}
        </span>
      </AccordionTrigger>

      <AccordionContent className="pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {category.stacks.map((stack) => (
            <div
              key={stack.name}
              className="flex items-center gap-2 bg-card hover:bg-accent/10 p-3 rounded-lg border border-border/40 transition-all hover:scale-[1.03]"
            >
              <div className="relative bg-zinc-200/10 rounded-md size-12 flex justify-center items-center">
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  width={32}
                  height={32}
                  className="size-8 drop-shadow-sm drop-shadow-muted-foreground/20"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="font-medium truncate">{stack.name}</span>
                <span className="text-xs text-muted-foreground">
                  {stack.projects} project
                  {stack.projects > 1 ? 's' : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
