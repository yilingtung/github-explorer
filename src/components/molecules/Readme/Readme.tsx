import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import * as S from './styles';

export interface ReadmeProps {
  className?: string;
  content: string;
}

export const Readme = React.memo(({ className, content }: ReadmeProps) => {
  return (
    <S.Container className={className}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
    </S.Container>
  );
});
