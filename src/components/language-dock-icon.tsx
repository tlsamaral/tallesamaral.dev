'use client'

import { Languages } from 'lucide-react'
import { useParams } from 'next/navigation'
import type { Locale } from '@/app/i18n/config'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { LocaleSwitcher } from './locale-switcher'

export function LanguageDockIcon() {
  const { locale } = useParams() as { locale: Locale }

  return (
    <Tooltip>
      <Popover>
        <PopoverTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-12 rounded-full"
            >
              <Languages className="size-4" />
            </Button>
          </TooltipTrigger>
        </PopoverTrigger>

        <PopoverContent
          side="top"
          className="w-44 shadow-md rounded-xl p-0"
          sideOffset={12}
        >
          <LocaleSwitcher />
        </PopoverContent>
      </Popover>
      <TooltipContent>
        <p>{locale === 'en' ? 'Change language' : 'Alterar idioma'}</p>
      </TooltipContent>
    </Tooltip>
  )
}
