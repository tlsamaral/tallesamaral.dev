import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

export function Header() {
  return (
    <header className="h-20 flex items-center justify-between bg-background p-6 border-b">
      <div className="flex gap-2">
        <Image src="/Logo-black.png" alt="logo" width={60} height={60} />
        {/* <h2 className="text-2xl antialiased font-bold">Backoffice</h2> */}
      </div>

      <Avatar>
        <AvatarImage src="https://github.com/tlsamaral.png" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    </header>
  )
}
