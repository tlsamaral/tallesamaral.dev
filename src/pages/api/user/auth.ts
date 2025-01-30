import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const token = req.headers.authorization

  if (token !== `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const authUserSchema = z.object({
    email: z.string().email('This is not a valid email'),
    password: z
      .string()
      .min(3, { message: 'Password must be at least 3 characters' }),
  })

  const { email, password } = authUserSchema.parse(req.body)

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (!user) {
    return res.status(404).send({ error: 'User not found' })
  }

  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const webToken = sign(
    {
      name: user.name,
      email: user.email,
    },
    process.env.NEXT_PUBLIC_API_TOKEN!,
    {
      subject: user.id,
      expiresIn: '30d',
    },
  )

  setCookie({ res }, '@tallesamaral:token', webToken, {
    path: '/',
    maxAge: 60 * 60 * 3, // 3 days
    sameSite: true,
    secure: process.env.NODE_ENV === 'production',
  })

  return res.status(200).json({
    // token: webToken,
    user: {
      name: user.name,
      email: user.email,
    },
  })
}
