import { SectionTitle } from './components/section-title'

interface AboutSectionProps {
  t: {
    about: {
      title: string
      short: string
      full: {
        paragraphs: string[]
      }
    }
  }
}

export async function AboutSection({ t }: AboutSectionProps) {
  return (
    <section>
      <SectionTitle>{t.about.title}</SectionTitle>
      {t.about.full.paragraphs.map((paragraph, index) => (
        <p className="text-muted-foreground mt-2" key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}
