import React from 'react';
import Skeleton, { SkeletonSquare } from '../../atoms/Skeleton';

import * as S from './styles';

export interface CardOrganizationProps {
  className?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
  onClearValue?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const CardOrganization = React.memo(
  ({ className, name, description, thumbnail }: CardOrganizationProps) => {
    return (
      <S.Container className={className}>
        <S.Thumbnail thumbnail={thumbnail} />
        <S.Content
          jusitifyCenter={name && description ? 'flex-start' : 'center'}
        >
          {name && <S.Name>{name}</S.Name>}
          {description && <S.Description>{description}</S.Description>}
        </S.Content>
      </S.Container>
    );
  }
);

export interface CardOrganizationSkeletonProps {
  className?: string;
}

export const CardOrganizationSkeleton = React.memo(
  ({ className }: CardOrganizationSkeletonProps) => {
    return (
      <S.Container className={className}>
        <SkeletonSquare size={96} />
        <S.Content jusitifyCenter="space-between">
          <Skeleton width="50%" size="title" />
          <Skeleton width="100%" />
          <Skeleton width="30%" />
        </S.Content>
      </S.Container>
    );
  }
);
