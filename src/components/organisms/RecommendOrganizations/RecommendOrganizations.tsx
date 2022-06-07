import React from 'react';
import { Link } from 'react-router-dom';

import useRecommendSimpleOrganizations from '../../../util/hooks/useRecommendSimpleOrganizations';
import CardOrganization, {
  CardOrganizationSkeleton,
} from '../../molecules/CardOrganization';

import * as S from './styles';

const CardGroup = () => {
  const {
    status: fetchRecommendOrgsStatus,
    data: recommendOrgsData,
    error: fetchRecommendOrgsError,
  } = useRecommendSimpleOrganizations({
    nameList: ['vercel', 'figma', 'mswjs', 'facebook', 'Dcard', 'strapi'],
  });

  return (
    <S.CardGroup>
      {fetchRecommendOrgsStatus === 'idle' ||
      fetchRecommendOrgsStatus === 'loading' ? (
        <>
          {new Array(6).fill(0).map((_, index) => (
            <CardOrganizationSkeleton key={index} />
          ))}
        </>
      ) : fetchRecommendOrgsStatus === 'error' ? (
        fetchRecommendOrgsError.message
      ) : (
        recommendOrgsData?.map((orgData) => (
          <Link key={orgData.id} to={`/${orgData.login}`}>
            <CardOrganization
              key={orgData.id}
              name={orgData.login}
              thumbnail={orgData.avatar_url}
            />
          </Link>
        ))
      )}
    </S.CardGroup>
  );
};

export interface RecommendOrganizationsProps {
  className?: string;
}

export const RecommendOrganizations = React.memo(
  ({ className }: RecommendOrganizationsProps) => {
    return (
      <S.Container className={className}>
        <S.Title>You might be interested</S.Title>
        <CardGroup />
      </S.Container>
    );
  }
);
