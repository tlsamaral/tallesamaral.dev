import { Button } from './style'

type BtnVariants = 'default' | 'leaked'

interface IBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string
  variant: BtnVariants
}

function Btn({ children, variant = 'default', ...props }: IBtnProps) {
  return (
    <Button variant={variant} {...props}>
      <span className="poppins-regular">{children}</span>
    </Button>
  )
}

export default Btn
