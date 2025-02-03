import type * as React from 'react'
import {
  ChartNoAxesGantt,
  ChartSpline,
  CodeXml,
  MessagesSquare,
  SquareTerminal,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { NavMain } from './nav-main'
import { NavUser } from './nav-user'

const data = {
  user: {
    name: 'Talles Amaral',
    email: 'contact@tallesamaral.dev',
    avatar: 'https://github.com/tlsamaral.png',
  },
  navMain: [
    {
      title: 'Insights',
      url: '/insights',
      icon: ChartSpline,
      isActive: true,
    },
    {
      title: 'Experiences',
      url: '/experiences',
      icon: ChartNoAxesGantt,
      isActive: true,
    },
    {
      title: 'Feedbacks',
      url: '/feedbacks',
      icon: MessagesSquare,
      isActive: true,
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: SquareTerminal,
      isActive: true,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <CodeXml className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Talles Amaral</span>
                  <span className="truncate text-xs">Managed my portfolio</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
