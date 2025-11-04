import { Languages } from 'lucide-react'

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
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-12 rounded-full"
            >
              <Languages className="size-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent side="top" className="w-44 shadow-md rounded-xl p-1">
            <LocaleSwitcher />
          </PopoverContent>
        </Popover>
      </TooltipTrigger>
      <TooltipContent>
        <p>Alterar idioma</p>
      </TooltipContent>
    </Tooltip>
  )
}
