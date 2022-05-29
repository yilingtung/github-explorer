import * as S from './styles';

export interface OrganizationPageProps {
  className?: string;
}

export const OrganizationPage = ({ className }: OrganizationPageProps) => {
  return (
    <S.Container className={className}>
      <S.Content>
        <S.Sidebar>
          <S.Profile
            name="facebook"
            description="test"
            avtar="https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
            githubUrl="https://github.com/Dcard"
          />
        </S.Sidebar>
        <S.Main>123</S.Main>
      </S.Content>
    </S.Container>
  );
};
