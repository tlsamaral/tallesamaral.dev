import Layout from '@/layouts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster richColors />
    </Layout>
  )
}
