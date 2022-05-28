import CardOrganizationStories from '../../molecules/CardOrganization';

import * as S from './styles';

export interface RecommendOrganizationsProps {
  className?: string;
}

const RecommendOrganizations = ({ className }: RecommendOrganizationsProps) => {
  return (
    <S.Container className={className}>
      <S.Title>You might be interested</S.Title>
      <S.CardGroup>
        <CardOrganizationStories
          name="facebook"
          description="We are working to build community through open source technology. NB: members must have two-factor auth."
          thumbnail="https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
        />
        <CardOrganizationStories
          name="facebook"
          description="We are working to build community through open source technology. NB: members must have two-factor auth."
          thumbnail="https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
        />
        <CardOrganizationStories
          name="facebook"
          description="We are working to build community through open source technology. NB: members must have two-factor auth."
          thumbnail="https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
        />
        <CardOrganizationStories
          name="facebook"
          description="We are working to build community through open source technology. NB: members must have two-factor auth."
          thumbnail="https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
        />
        <CardOrganizationStories
          name="facebook"
          description="We are working to build community through open source technology. NB: members must have two-factor auth."
          thumbnail="https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
        />
        <CardOrganizationStories
          name="facebook"
          description="We are working to build community through open source technology. NB: members must have two-factor auth."
          thumbnail="https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
        />
      </S.CardGroup>
    </S.Container>
  );
};

export default RecommendOrganizations;
