import { useRouter } from 'next/router'
import { BackofficeLayout } from './backoffice'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const isBackOffice = router.pathname.startsWith('/backoffice')

  if (isBackOffice) {
    return <BackofficeLayout>{children}</BackofficeLayout>
  }

  return <div id="app">{children}</div>
}
