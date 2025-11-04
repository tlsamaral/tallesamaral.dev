'use client'

import Image from 'next/image'
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
      <div className="size-30 rounded-full relative">
        <Avatar className="size-30 border-2">
          <AvatarFallback>T</AvatarFallback>
          <AvatarImage
            src="https://github.com/tlsamaral.png"
            alt="@TallesAmaral"
          />
        </Avatar>

        <div className="flex justify-center items-center border-2 size-12 rounded-full absolute -bottom-2 -left-2 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 gap-2 backdrop-blur-md">
          <Image
            src="/icons/tallesamaral-logo.svg"
            alt="@TallesAmaral"
            width={28}
            height={28}
            priority
            className="size-7 opacity-80"
          />
        </div>
      </div>
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
