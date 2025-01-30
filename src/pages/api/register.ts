import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// const projects = [
//   {
//     name: 'Auto Park System',
//     description:
//       'Auto Park System is an intelligent parking management system that recognizes when a car enters a space and displays this information on a real-time dashboard. It allows the registration of multiple parking spaces and gates, which can be managed by the system for opening and closing. The system aims to optimize parking operations, providing an efficient and modern experience for both administrators and users.',
//     tags: ['JavaScript', 'Node.js', 'React', 'Redux'],
//     repositoryUrl: 'https://github.com/tlsamaral/AutoPark',
//     appUrl: 'https://auto-park.vercel.app/login',
//     banner:
//       'https://res.cloudinary.com/duwaccahn/image/upload/v1737930446/pub-autopark_rvaay0.png',
//     startDate: dayjs().year(2024).month(2).date(10),
//     endDate: dayjs().year(2024).month(6).date(5),
//     status: true,
//   },
//   {
//     name: 'Ordena',
//     description:
//       'Ordena is an intelligent restaurant management system designed to streamline communication between different areas of an establishment in real-time. It enables seamless order transmission from waiters to the kitchen, ensuring efficiency and reducing errors. The system features a comprehensive dashboard for monitoring orders and workflow, along with customizable user permissions for secure access control. With Ordena, restaurants can optimize their operations, enhancing both service speed and overall customer experience.',
//     tags: ['Node.js', 'Next.js', 'PostgreSQL', 'Socket.io', 'Twillio'],
//     repositoryUrl: 'https://github.com/tlsamaral/api_rest',
//     banner:
//       'https://res.cloudinary.com/duwaccahn/image/upload/v1738192954/hfcyepo2wcl7tdi9cqlq.png',
//     startDate: dayjs().year(2024).month(8).date(17),
//     endDate: dayjs().year(2024).month(11).date(29),
//     status: true,
//   },
// ]

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const projects = await prisma.project.findMany({
    include: {
      tags: {
        select: {
          tag: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  return res.status(201).json({ projects })
}
