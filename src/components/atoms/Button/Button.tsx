import * as S from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'small' | 'medium';
}

const Button = ({
  className,
  children,
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <S.Container className={className} size={size} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
