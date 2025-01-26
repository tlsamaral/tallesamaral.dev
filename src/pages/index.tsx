import AboutMe from '@/components/AboutMe/AboutMe'
import Contact from '@/components/Contact/Contact'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Initial from '@/components/Initial/Initial'
// import Projects from '@/components/Projects/Projects'
import AppProvider from '@/context/AppContext'
import { Toaster } from 'sonner'

const Experiences = dynamic(
  () => import('../components/Experiences/Experiences'),
  {
    ssr: false, // 🔥 Desativa SSR para evitar erro com GSAP
  },
)

const Projects = dynamic(() => import('../components/Projects/Projects'), {
  ssr: false, // 🔥 Desativa SSR para evitar erro com GSAP
})

export default function Home() {
  return (
    <AppProvider>
      <Toaster richColors />
      <Header />
      <Initial />
      <AboutMe />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </AppProvider>
  )
}
