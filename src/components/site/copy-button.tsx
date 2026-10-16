'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { buttonStyles } from './styles'

export function CopyButton({
  value,
  label,
  copiedLabel,
}: {
  value: string
  label: string
  copiedLabel: string
}) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(id)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      // Clipboard can be unavailable (insecure context, permissions);
      // the address stays visible and selectable next to the button.
    }
  }

  return (
    <button type="button" onClick={copy} className={buttonStyles.secondary}>
      <span className="relative size-4" aria-hidden="true">
        <CopyIcon
          className={cn(
            'absolute inset-0 size-4 transition-[opacity,transform] duration-200',
            copied ? 'scale-50 opacity-0' : 'scale-100 opacity-100',
          )}
        />
        <CheckIcon
          className={cn(
            'absolute inset-0 size-4 text-brand transition-[opacity,transform] duration-200',
            copied ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
          )}
        />
      </span>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  )
}
