import React from 'react';

import Label from '../../atoms/Label';
import Skeleton from '../../atoms/Skeleton';

import { ReactComponent as GithubSvg } from '../../../assets/icons/github.svg';
import { ReactComponent as StarSvg } from '../../../assets/icons/star.svg';

import * as S from './styles';
import Tag from '../../atoms/Tag';
import LanguageTag from '../LanguageTag';
import timeFormatter from '../../../util/functions/timeFormatter';
import HintText from '../../atoms/HintText';

export interface RepoProfileProps {
  className?: string;
  org: string;
  repo: string;
  description: string;
  githubUrl: string;
  language?: string;
  stars: number;
  updatedAt: string;
  topics: string[];
}

export const RepoProfile = React.memo(
  ({
    className,
    org,
    repo,
    description,
    githubUrl,
    language,
    stars,
    updatedAt,
    topics = [],
  }: RepoProfileProps) => {
    return (
      <S.Container className={className}>
        <S.Title>
          <span>{org}</span>
          <span>/</span>
          <span>{repo}</span>
        </S.Title>
        <S.Description>{description}</S.Description>
        <HintText>Latest update: {timeFormatter(updatedAt)}</HintText>
        {topics?.length >= 1 && (
          <S.TopicGroup>
            {topics.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </S.TopicGroup>
        )}
        {language && <LanguageTag type={language} />}
        <Label Icon={StarSvg}>{stars}</Label>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <Label Icon={GithubSvg}>{githubUrl}</Label>
        </a>
      </S.Container>
    );
  }
);

export interface RepoProfileSkeletonProps {
  className?: string;
}

export const RepoProfileSkeleton = React.memo(
  ({ className }: RepoProfileSkeletonProps) => {
    return (
      <S.Container className={className}>
        <Skeleton width="50%" size="title" />
        <Skeleton width="100%" />
        <Skeleton width="30%" />
        <Skeleton width="30%" />
        <Skeleton width="20%" />
      </S.Container>
    );
  }
);
