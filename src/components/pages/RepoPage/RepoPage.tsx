import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

import useReadme from '../../../util/hooks/useReadme';
import useRepo from '../../../util/hooks/useRepo';

import Box from '../../atoms/Box';
import Loading from '../../atoms/Loading';
import CardError from '../../molecules/CardError';
import RepoProfile, { RepoProfileSkeleton } from '../../molecules/RepoProfile';

const Readme = lazy(() => import('../../molecules/Readme'));

import * as S from './styles';

export interface RepoPageProps {
  className?: string;
  isInModal?: boolean;
  repoName?: string;
}

export const RepoPage = ({
  className,
  isInModal,
  repoName: repoNameFromProps,
}: RepoPageProps) => {
  const { org, repo: repoFromParams } = useParams();
  const repo = isInModal ? repoNameFromProps : repoFromParams;

  const {
    status: fetchRepoStatus,
    data: repoData,
    error: fetchRepoError,
  } = useRepo(
    { org: org as string, repoName: repo as string },
    { enabled: !!true, staleTime: Infinity }
  );

  const { data: readmeData } = useReadme(
    {
      org: org as string,
      repoName: repo as string,
      defaultBarnch: repoData?.default_branch || '',
    },
    { enabled: !!repoData?.default_branch, staleTime: Infinity }
  );

  return (
    <S.Container className={className}>
      {repoData ? (
        <>
          <RepoProfile
            org={org || ''}
            repo={repo || ''}
            description={repoData.description}
            githubUrl={repoData.html_url}
            language={repoData.language}
            stars={repoData.stargazers_count}
            updatedAt={repoData.updated_at}
            topics={repoData.topics}
            isInModal={isInModal}
          />
          {readmeData && (
            <Suspense
              fallback={
                <Box>
                  <Loading />
                </Box>
              }
            >
              <Readme content={readmeData} />
            </Suspense>
          )}
        </>
      ) : (
        <>
          {fetchRepoStatus === 'loading' && <RepoProfileSkeleton />}
          {fetchRepoStatus === 'error' && (
            <CardError
              type={
                fetchRepoError?.message === 'Not Found' ? 'notFound' : 'error'
              }
              message={
                fetchRepoError?.message === 'Not Found'
                  ? `'${org}/${repo}' not found.`
                  : fetchRepoError?.message || ''
              }
            />
          )}
        </>
      )}
    </S.Container>
  );
};
