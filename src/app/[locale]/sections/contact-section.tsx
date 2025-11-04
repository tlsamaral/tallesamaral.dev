'use client'

import SocialButton from '@/components/kokonutui/social-button'

import { SectionTitle } from './components/section-title'

interface ContactSectionProps {
  t: {
    contact: {
      title: string
      description: string
      button: string
    }
  }
}

export function ContactSection({ t: { contact } }: ContactSectionProps) {
  return (
    <section className="pt-20 text-center space-y-4">
      <SectionTitle className="text-3xl">{contact.title}</SectionTitle>
      <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {contact.description}
      </p>

      <div className="relative flex justify-center mx-auto">
        <SocialButton className="mt-8" buttonLabel={contact.button} />
      </div>
    </section>
  )
}
