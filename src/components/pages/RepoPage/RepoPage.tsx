import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useAppSelector from '../../../util/hooks/useAppSelector';
import useAppDispatch from '../../../util/hooks/useAppDispatch';
import { fetchSingleRepo, selectRepository } from '../../../store/repository';
import { fetchReadme, selectReadme } from '../../../store/readme';

import CardError from '../../molecules/CardError';
import RepoProfile, { RepoProfileSkeleton } from '../../molecules/RepoProfile';
import Readme from '../../molecules/Readme';

import * as S from './styles';

export interface RepoPageProps {
  className?: string;
  repoName?: string;
}

export const RepoPage = ({
  className,
  repoName: repoNameFromProps,
}: RepoPageProps) => {
  const { org, repo: repoFromParams } = useParams();
  const repo = repoFromParams || repoNameFromProps;

  const {
    dataByRepoFullName,
    singleData: { status, error },
  } = useAppSelector(selectRepository);
  const { dataByRepoFullName: readmeDataByRepoFullName } =
    useAppSelector(selectReadme);
  const dispatch = useAppDispatch();
  const repoData = dataByRepoFullName[`${org}/${repo}`];
  const readmeData = readmeDataByRepoFullName[`${org}/${repo}`];

  const fetchingProcess = useCallback(async () => {
    if (!repo || !org || readmeData) return;

    if (!repoData) {
      await dispatch(fetchSingleRepo({ org, repoName: repo }));
    }

    dispatch(
      fetchReadme({
        org,
        repoName: repo,
        defaultBarnch: repoData.default_branch,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [org, repo, repoData, readmeData]);

  useEffect(() => {
    fetchingProcess();
  }, [fetchingProcess]);

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
          />
          {readmeData && <Readme content={readmeData} />}
        </>
      ) : (
        <>
          {status === 'loading' && <RepoProfileSkeleton />}
          {status === 'failed' && (
            <CardError
              type="error"
              message={
                error === 'Not Found' ? `'${org}/${repo}' not found.` : error
              }
            />
          )}
        </>
      )}
    </S.Container>
  );
};
