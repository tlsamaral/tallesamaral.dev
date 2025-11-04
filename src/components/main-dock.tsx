'use client'

import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { socialDataItems } from '@/utils/social-data'
import { LanguageDockIcon } from './language-dock-icon'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { Dock, DockIcon } from './ui/dock'
import { ScrollProgress } from './ui/scroll-progress'

export function MainDock() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ScrollProgress />

      <TooltipProvider>
        <Dock direction="middle">
          {socialDataItems.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(socialDataItems.contact.social).map(
            ([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'icon' }),
                        'size-12 rounded-full',
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ),
          )}

          <Separator orientation="vertical" className="h-full" />

          <DockIcon>
            <LanguageDockIcon />
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full size-12"
                  asChild
                >
                  <AnimatedThemeToggler />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toogle theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  )
}
