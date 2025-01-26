import { Button } from './style';

type BtnVariants = 'default' | 'leaked';

interface IBtnProps {
  children: React.ReactNode | string;
  variant: BtnVariants;
  type: 'submit' | 'button';
  onClick?: () => void;
}

function Btn({
  children,
  variant = 'default',
  type = 'button',
  onClick,
}: IBtnProps) {
  return (
    <Button variant={variant} onClick={onClick} type={type}>
      <span className="poppins-medium">{children}</span>
    </Button>
  );
}

export default Btn;
