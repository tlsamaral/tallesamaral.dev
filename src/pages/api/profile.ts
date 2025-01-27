import type { NextApiRequest, NextApiResponse } from 'next'

const experiences = [
  {
    company: 'Editora Santuário',
    position: 'Junior Development Analyst',
    description:
      'Since April 2023, I have been working as a Junior Development Analyst at Editora Santuário, contributing to the development of innovative corporate solutions. My main projects include the Intranet Portal and Help Desk system, both built using Full MVC with .NET Framework and Core 8. Additionally, I have worked on a CRM sales module and a form management system, utilizing modern technologies such as Next.js, Tailwind CSS, TypeScript, React Hook Form, Zod, and Axios. Currently, I am engaged in developing the logistics module for the CRM using Vite and React Router DOM.',
    tags: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router DOM',
      'Zod',
      'React Hook Form',
      '.NET Framework',
      '.NET Core 8',
    ],
    startDate: 'April 2023',
    endDate: 'Present',
  },
]

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

  return res.status(200).json({ experiences })
}
