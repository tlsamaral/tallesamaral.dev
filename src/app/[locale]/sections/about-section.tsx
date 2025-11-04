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
      <h2 className="text-2xl font-bold">{t.about.title}</h2>

      {t.about.full.paragraphs.map((paragraph, index) => (
        <p className="text-muted-foreground mt-2" key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}
