'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/Sao_Paulo',
})

/** Current time in Brazil, rendered only on the client to avoid mismatches. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()))
    update()
    const id = window.setInterval(update, 30_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <time className="tabular-nums" aria-live="off">
      {time ?? '--:--'}
    </time>
  )
}
