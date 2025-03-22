import { useRouter } from 'next/router'
import { BackofficeLayout } from './backoffice'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const isBackOffice = router.pathname.startsWith('/backoffice')
  const isSignIn = router.pathname === '/backoffice/sign-in'
  const isLandingPage = router.pathname === '/'

  if (isLandingPage) {
    return <div id="app">{children}</div>
  }

  if (isSignIn) {
    return <>{children}</>
  }

  if (isBackOffice) {
    return <BackofficeLayout>{children}</BackofficeLayout>
  }

  return <>{children}</>
}
