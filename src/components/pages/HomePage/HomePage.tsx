import * as S from './styles';

export interface HomePageProps {
  className?: string;
}

const HomePage = ({ className }: HomePageProps) => {
  return <S.Container className={className}>HomePage</S.Container>;
};

export default HomePage;
