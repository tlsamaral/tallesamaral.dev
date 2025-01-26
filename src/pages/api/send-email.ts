import type { NextApiRequest, NextApiResponse } from 'next'
import { resend } from '@/lib/resend'
import { z } from 'zod'
import AdminEmail from '../../../emails/admin-email'
import CustomerEmail from '../../../emails/customer-email'

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

  const sendEmailSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    email: z.string().email('This is not a valid email'),
    message: z
      .string()
      .min(3, { message: 'Message must be at least 3 characters' }),
  })

  const { name, email, message } = sendEmailSchema.parse(req.body)

  const customerEmailData = await resend.emails.send({
    from: 'Contact | tallesamaral.dev <contact@tallesamaral.dev>',
    to: ['tallesrafael60@gmail.com', email],
    subject: 'Tranks for your message | Talles Amaral - Software Developer',
    react: CustomerEmail({ name }),
  })

  const adminEmailData = await resend.emails.send({
    from: 'Contact | tallesamaral.dev <contact@tallesamaral.dev>',
    to: ['contact@tallesamaral.dev', 'tallesrafael60@gmail.com'],
    subject: 'New Contact Form Submission',
    react: AdminEmail({ name, email, message }),
  })

  if (customerEmailData.error || adminEmailData.error) {
    return res.status(400).json({
      error: 'Error sending email',
    })
  }

  res.status(200).json({
    message: 'Email sent successfully',
    customerEmailData,
    adminEmailData,
  })
}
