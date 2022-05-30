import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { GithubOrgData } from '../../../../types';

import {
  fetchOrgnizationByLoginName,
  selectOrganization,
} from '../../../store/organization';
import useAppDispatch from '../../../util/hooks/useAppDispatch';
import useAppSelector from '../../../util/hooks/useAppSelector';
import useElementOnScreen from '../../../util/hooks/useElementOnScreen';

import ScrollTopButton from '../../atoms/ScrollTopButton';
import CardError from '../../molecules/CardError';
import Profile, { ProfileSkeleton } from '../../molecules/Profile';
import ReposContainer from '../../organisms/ReposContainer';
import ReposFilters from '../../organisms/ReposFilters';

import * as S from './styles';

export interface HasOrganizationProps {
  orgData?: GithubOrgData;
}

const HasOrganization = ({ orgData }: HasOrganizationProps) => {
  const [filterRef, isFilterVisible] = useElementOnScreen<HTMLDivElement>({
    rootMargin: '100px',
  });
  const {
    singleData: { status: fetchOrgStatus },
  } = useAppSelector(selectOrganization);

  return (
    <>
      <S.Sidebar>
        <S.StickyProfile>
          {fetchOrgStatus === 'loading' || !orgData ? (
            <ProfileSkeleton />
          ) : (
            <Profile
              name={orgData.name}
              description={orgData.description}
              avtar={orgData.avatar_url}
              githubUrl={orgData.html_url}
              blogUrl={orgData.blog}
            />
          )}
        </S.StickyProfile>
      </S.Sidebar>
      <S.Main>
        <ReposFilters ref={filterRef} />
        <ReposContainer />
      </S.Main>
      {!isFilterVisible && <ScrollTopButton />}
    </>
  );
};

export interface OrganizationPageProps {
  className?: string;
}

export const OrganizationPage = ({ className }: OrganizationPageProps) => {
  const { org } = useParams();
  const {
    dataByLoginName,
    singleData: { status: fetchOrgStatus, error: fetchOrgError },
  } = useAppSelector(selectOrganization);
  const dispatch = useAppDispatch();

  const orgData = useMemo(() => {
    if (!org) return undefined;
    return dataByLoginName[org];
  }, [org, dataByLoginName]);

  useEffect(() => {
    if (!org || orgData) return;
    dispatch(fetchOrgnizationByLoginName({ loginName: org }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [org, orgData]);

  return (
    <S.Container className={className}>
      <S.Content>
        {fetchOrgStatus === 'failed' ? (
          <S.ErrorBox>
            <CardError
              type={fetchOrgError === 'Not Found' ? 'empty' : 'error'}
              message={
                fetchOrgError === 'Not Found'
                  ? `'${org}' not found.`
                  : fetchOrgError
              }
            />
          </S.ErrorBox>
        ) : (
          <HasOrganization orgData={orgData} />
        )}
      </S.Content>
    </S.Container>
  );
};
