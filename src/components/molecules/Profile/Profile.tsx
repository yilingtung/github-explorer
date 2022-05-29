import React from 'react';

import Label from '../../atoms/Label';
import Skeleton, { SkeletonSquare } from '../../atoms/Skeleton';

import { ReactComponent as LinkSvg } from '../../../assets/icons/link.svg';

import * as S from './styles';

export interface ProfileProps {
  className?: string;
  name: string;
  avtar?: string;
  description?: string;
  githubUrl: string;
  blogUrl?: string;
  onClearValue?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Profile = React.memo(
  ({
    className,
    name,
    avtar,
    description,
    githubUrl,
    blogUrl,
  }: ProfileProps) => {
    return (
      <S.Container className={className}>
        <S.Avatar avtar={avtar} />
        <S.Content>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <S.Name>{name}</S.Name>
          </a>
          {description && <S.Description>{description}</S.Description>}
          {blogUrl && (
            <a href={blogUrl} target="_blank" rel="noreferrer">
              <Label Icon={LinkSvg}>{blogUrl}</Label>
            </a>
          )}
        </S.Content>
      </S.Container>
    );
  }
);

export interface ProfileSkeletonProps {
  className?: string;
}

export const ProfileSkeleton = React.memo(
  ({ className }: ProfileSkeletonProps) => {
    return (
      <S.Container className={className}>
        <SkeletonSquare size={160} />
        <S.Content>
          <Skeleton width="50%" size="title" />
          <Skeleton width="100%" />
          <Skeleton width="30%" />
        </S.Content>
      </S.Container>
    );
  }
);
