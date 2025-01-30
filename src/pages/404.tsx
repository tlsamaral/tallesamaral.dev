import { CodeXml } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="https://res.cloudinary.com/duwaccahn/image/upload/v1738235456/my-profile-p_k6ckh1.png"
                  alt="Talles Amaral | Profile"
                  width={32}
                  height={32}
                />
                <CodeXml className="h-8 w-8 text-black" />
                <span className="sr-only">Talles Amaral.</span>
              </div>
              <h1 className="text-3xl font-bold">Ops, page not found.</h1>
              <div className="text-center text-sm">
                <p>
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Image
                src="/mike.png"
                alt="Mike Wazowski looksing for something"
                width={150}
                height={250}
                unoptimized
                priority
              />
            </div>
          </div>
          <div className="text-balance text-center text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
            Back to my{' '}
            <Link href="/" rel="noreferrer">
              portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
