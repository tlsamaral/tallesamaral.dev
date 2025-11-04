import { MainDock } from '@/components/main-dock'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto">
      <h1>Hello world</h1>

      <div className="w-full fixed inset-x-0 bottom-4 z-50">
        <MainDock />
      </div>
    </main>
  )
}
