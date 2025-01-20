import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { resend } from '@/lib/resend';

export default  async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['worktalles@hotmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'Talles Amaral' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
