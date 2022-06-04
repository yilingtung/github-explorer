import * as S from './styles';

export interface LoadingProps {
  className?: string;
}

export const Loading = ({ className }: LoadingProps) => {
  return (
    <S.Container className={className}>
      <S.Dot delay={0} />
      <S.Dot delay={0.5} />
      <S.Dot delay={1} />
    </S.Container>
  );
};
