import { lazy, Suspense } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import useElementOnScreen from '../../../util/hooks/useElementOnScreen';
import useOrganization from '../../../util/hooks/useOrganization';

import ScrollTopButton from '../../atoms/ScrollTopButton';
import CardError from '../../molecules/CardError';
import OrgProfile, { OrgProfileSkeleton } from '../../molecules/OrgProfile';
import ReposContainer from '../../organisms/ReposContainer';
import ReposFilters from '../../organisms/ReposFilters';

const Modal = lazy(() => import('../../atoms/Modal'));
const RepoPage = lazy(() => import('../RepoPage'));

import * as S from './styles';

const MainContent = () => {
  const [filterRef, isFilterVisible] = useElementOnScreen<HTMLDivElement>({
    rootMargin: '100px',
  });

  return (
    <>
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
  const location = useLocation();
  const navigate = useNavigate();

  const {
    status: fetchOrgStatus,
    data: orgData,
    error: fetchOrgError,
  } = useOrganization(
    { name: org as string },
    {
      staleTime: Infinity,
    }
  );

  return (
    <S.Container className={className}>
      {fetchOrgStatus === 'error' ? (
        <CardError
          type={fetchOrgError.message === 'Not Found' ? 'notFound' : 'error'}
          message={
            fetchOrgError.message === 'Not Found'
              ? `'${org}' not found.`
              : fetchOrgError.message
          }
        />
      ) : (
        <>
          <S.Sidebar>
            <S.StickyProfile>
              {fetchOrgStatus === 'loading' || !orgData ? (
                <OrgProfileSkeleton />
              ) : (
                <OrgProfile
                  name={orgData.name}
                  description={orgData.description}
                  avtar={orgData.avatar_url}
                  githubUrl={orgData.html_url}
                  blogUrl={orgData.blog}
                />
              )}
            </S.StickyProfile>
          </S.Sidebar>
          <MainContent />
        </>
      )}
      {(location?.state as { modal?: boolean })?.modal && (
        <Suspense>
          <Modal
            onDeactive={() => {
              navigate(-1);
            }}
          >
            <RepoPage repoName={location.pathname.split('/')[2]} />
          </Modal>
        </Suspense>
      )}
    </S.Container>
  );
};
