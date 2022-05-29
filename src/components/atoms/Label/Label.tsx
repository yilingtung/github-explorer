import React from 'react';

import * as S from './styles';

export interface LabelProps {
  className?: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconType?: 'stroke' | 'fill';
  children: React.ReactNode;
}

export const Label = React.memo(
  ({ className, Icon, iconType = 'fill', children }: LabelProps) => {
    return (
      <S.Container className={className} iconType={iconType}>
        {Icon && <Icon />}
        <span>{children}</span>
      </S.Container>
    );
  }
);
