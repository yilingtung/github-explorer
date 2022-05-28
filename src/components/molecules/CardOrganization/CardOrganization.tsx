import * as S from './styles';

export interface CardOrganizationProps {
  className?: string;
  name: string;
  description: string;
  thumbnail: string;
  onClearValue?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const CardOrganization = ({
  className,
  name,
  description,
  thumbnail,
}: CardOrganizationProps) => {
  return (
    <S.Container className={className}>
      <S.Thumbnail thumbnail={thumbnail} />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
};

export default CardOrganization;
