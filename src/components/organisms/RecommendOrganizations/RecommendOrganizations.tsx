import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchSimpleRecommendOrgs,
  selectSimpleOrg,
} from '../../../store/simpleOrg';
import useAppDispatch from '../../../util/hooks/useAppDispatch';
import useAppSelector from '../../../util/hooks/useAppSelector';
import CardOrganization, {
  CardOrganizationSkeleton,
} from '../../molecules/CardOrganization';

import * as S from './styles';

const CardGroup = () => {
  const {
    recommend: { status, error, nameList },
    dataByName,
  } = useAppSelector(selectSimpleOrg);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSimpleRecommendOrgs());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const recommendData = useMemo(() => {
    return nameList.filter((orgName) => dataByName[orgName]);
  }, [nameList, dataByName]);

  return (
    <S.CardGroup>
      {status == 'idle' || status === 'loading' ? (
        <>
          {new Array(6).fill(0).map((_, index) => (
            <CardOrganizationSkeleton key={index} />
          ))}
        </>
      ) : status === 'failed' ? (
        error
      ) : (
        <>
          {recommendData.map((orgName) => (
            <Link to={`/${dataByName[orgName].login}`}>
              <CardOrganization
                key={dataByName[orgName].id}
                name={orgName}
                thumbnail={dataByName[orgName].avatar_url}
              />
            </Link>
          ))}
        </>
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
