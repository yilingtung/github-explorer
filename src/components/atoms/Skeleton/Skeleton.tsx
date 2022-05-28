import React from 'react';

import * as S from './styles';

export interface SkeletonProps {
  className?: string;
  width: number | string;
  size?: 'title' | 'subtitle' | 'paragraph';
}

export const Skeleton = ({
  className,
  width,
  size = 'paragraph',
}: SkeletonProps) => {
  return <S.Text className={className} width={width} size={size} />;
};

export interface SkeletonSquareProps {
  className?: string;
  size: number | string;
}

export const SkeletonSquare = ({ className, size }: SkeletonSquareProps) => {
  return <S.Square className={className} size={size} />;
};
