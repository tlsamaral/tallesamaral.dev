/** Shared interaction styles so every control behaves the same way. */

const base =
  'group/btn inline-flex select-none items-center justify-center gap-2 rounded-full text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 ease-(--ease-out-soft) active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50'

export const buttonStyles = {
  primary: `${base} h-11 bg-foreground px-5 text-background hover:bg-foreground/85`,
  secondary: `${base} h-11 border border-border bg-surface px-5 text-foreground hover:border-foreground/25 hover:bg-subtle`,
  ghost: `${base} h-9 px-3 text-muted-foreground hover:bg-subtle hover:text-foreground`,
  icon: `${base} size-9 text-muted-foreground hover:bg-subtle hover:text-foreground`,
}

/** Arrow that nudges forward on hover of the closest `group`. */
export const arrowNudge =
  'transition-transform duration-200 ease-(--ease-out-soft) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover/btn:translate-x-0.5'
