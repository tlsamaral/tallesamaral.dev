'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface HeroSectionProps {
  t: {
    hero: {
      title: string
      subtitle: string
    }
  }
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="flex gap-8">
      <Avatar className="size-32 border-2">
        <AvatarFallback>T</AvatarFallback>
        <AvatarImage
          src="https://github.com/tlsamaral.png"
          alt="@TallesAmaral"
        />
      </Avatar>
      <div className="space-y-2">
        <h1 className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          {t.hero.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  )
}
