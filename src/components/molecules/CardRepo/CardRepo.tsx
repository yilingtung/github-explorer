import React from 'react';

import Skeleton from '../../atoms/Skeleton';
import LanguageTag from '../LanguageTag';

import { ReactComponent as StarSvg } from '../../../assets/icons/star.svg';

import * as S from './styles';

export interface CardRepoProps {
  className?: string;
  name?: string;
  description?: string;
  stars: number;
  language?: string;
  githubUrl: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

export const CardRepo = React.memo(
  ({
    className,
    name,
    description,
    stars,
    language,
    githubUrl,
    onClick,
  }: CardRepoProps) => {
    return (
      <S.Container className={className} onClick={onClick}>
        <S.Header>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <S.Name>{name}</S.Name>
          </a>
          <S.HeaderStarLabel Icon={StarSvg}>{stars}</S.HeaderStarLabel>
        </S.Header>
        <S.Description>{description}</S.Description>
        <S.Footer>{language && <LanguageTag type={language} />}</S.Footer>
      </S.Container>
    );
  }
);

export interface CardRepoSkeletonProps {
  className?: string;
}

export const CardRepoSkeleton = React.memo(
  ({ className }: CardRepoSkeletonProps) => {
    return (
      <S.SkeletonContainer className={className}>
        <Skeleton width="50%" size="title" />
        <Skeleton width="100%" />
        <Skeleton width="30%" />
      </S.SkeletonContainer>
    );
  }
);
