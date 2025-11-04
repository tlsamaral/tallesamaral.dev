import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/utils/get-initials'
import type { EducationItemProps } from '../education-section'

export function EducationItem({ item }: { item: EducationItemProps }) {
  return (
    <div className="flex gap-4 items-start">
      <Avatar className="size-14 border flex items-center justify-center overflow-hidden">
        <AvatarFallback className="uppercase">
          {getInitials(item.institution)}
        </AvatarFallback>
        <AvatarImage
          src={item.avatarUrl || undefined}
          alt={item.institution}
          width={32}
          height={32}
          className="
            size-8
            drop-shadow-sm
            transition

            dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]
          "
        />
      </Avatar>
      <div className="flex flex-col">
        <h4 className="font-bold">{item.degree}</h4>
        <p className="text-muted-foreground">{item.institution}</p>
        <div className="flex items-baseline gap-2">
          {item.location && (
            <p className="text-sm text-muted-foreground">{item.location}</p>
          )}
          <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
        </div>
      </div>
    </div>
  )
}
