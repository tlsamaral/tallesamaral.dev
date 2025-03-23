import { CodeXml } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/axios'
import { toast } from 'sonner'
import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'

const authUserSchema = z.object({
  email: z.string().email('This is not a valid email'),
  password: z
    .string()
    .min(3, { message: 'Password must be at least 3 characters' }),
})

type AuthUser = z.infer<typeof authUserSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthUser>({
    resolver: zodResolver(authUserSchema),
  })

  const router = useRouter()

  async function handleSignIn({ email, password }: AuthUser) {
    try {
      const response = await api.post('/user/auth', { email, password })
      toast.success(`Welcome, ${response.data.user.name}`)

      await router.push('/backoffice')
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.response?.status === 400) {
          toast.error('Email or password is incorrect')
          return
        }

        if (err.response?.status === 401) {
          toast.error('Email or password is incorrect')
          return
        }

        if (err.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            <h1 className="text-xl font-bold">Welcome to backoffice.</h1>
            <div className="text-center text-sm">
              Backoffice of Talles Amaral
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="t@example.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        Management of Talles Amaral&apos;s portfolio.{' '}
        <a
          href="https://github.com/tlsamaral/tallesamaral.dev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
