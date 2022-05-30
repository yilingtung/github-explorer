import React from 'react';
import ReactMarkdown from 'react-markdown';

import * as S from './styles';

export interface ReadmeProps {
  className?: string;
  content: string;
}

export const Readme = React.memo(({ className, content }: ReadmeProps) => {
  return (
    <S.Container className={className}>
      <ReactMarkdown children={content} />
    </S.Container>
  );
});
