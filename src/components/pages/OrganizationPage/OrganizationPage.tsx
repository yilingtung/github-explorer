import CardRepo from '../../molecules/CardRepo';

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
        <S.Main>
          <S.List>
            <CardRepo
              name="react"
              description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
              stars={188510}
              language="JavaScript"
              githubUrl="https://github.com/Dcard"
            />
            <CardRepo
              name="react"
              description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
              stars={188510}
              githubUrl="https://github.com/Dcard"
            />
            <CardRepo
              name="react"
              description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
              stars={188510}
              githubUrl="https://github.com/Dcard"
            />
          </S.List>
        </S.Main>
      </S.Content>
    </S.Container>
  );
};
