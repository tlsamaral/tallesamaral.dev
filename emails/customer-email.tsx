/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

interface CustomerEmailProps {
  name: string
}

export default function CustomerEmail({ name }: CustomerEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Tranks for your message | Talles Amaral - Software Developer
      </Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src="https://res.cloudinary.com/duwaccahn/image/upload/v1738235456/my-profile-p_k6ckh1.png"
            width="60"
            height="60"
            alt="Talles Amaral | Profile"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              🎉 We Received Your Message! Let's Talk?
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Hello, {name}! Great to hear from you! Your message has been
                  received, and I'll get back to you shortly with more details.
                  In the meantime, if you'd like to share any additional
                  information or have any questions, just click the button
                  below. I'm here to help!
                </Text>
              </Row>
            </Section>

            <Section className="text-center">
              <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
                Contact Me
              </Button>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="text-center text-gray-400 mb-45">
              © 2024 | Designed & Developed by{' '}
              <Link href="https://tallesamaral.dev">Talles Amaral</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
