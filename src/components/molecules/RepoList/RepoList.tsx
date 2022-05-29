import React, { useCallback, useRef } from 'react';
import { VariableSizeList, VariableSizeListProps } from 'react-window';
import { ReactWindowScroller } from 'react-window-scroller';

import { CARD_REPO_HEIGHT } from '../../../util/constants';

import CardRepo, {
  CardRepoSkeleton,
  CardRepoProps,
} from '../../molecules/CardRepo';

import * as S from './styles';

export interface RepoListProps {
  listHeight: number;
  listWidth: number;
  data: CardRepoProps[];
  disableFetchMore?: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage?: () => void;
}

export const RepoList = React.memo(
  ({
    listHeight,
    listWidth,
    data,
    // 如果發生 API rate limit 就轉為手動觸發 fetchNextPage
    disableFetchMore = false,
    hasNextPage = false,
    isFetchingNextPage = false,
    fetchNextPage,
  }: RepoListProps) => {
    const itemCount = data.length;
    const isEmpty = data.length <= 0;
    const isInitialLoading = isFetchingNextPage && isEmpty;
    const itemHeight = CARD_REPO_HEIGHT + 24;
    const skeletonCountInScreen = Math.round(listHeight / itemHeight);
    const renderItemCount =
      (hasNextPage && !disableFetchMore) || isInitialLoading
        ? itemCount + skeletonCountInScreen
        : itemCount;

    // handle infinite scroll
    const observer = useRef<IntersectionObserver | null>(null);
    // will be call every single time when component rerender
    const lastElementRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (disableFetchMore || isFetchingNextPage) {
          return;
        }
        // disconnect observer from previous element before reconnet
        if (observer.current) {
          observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((enties) => {
          if (
            enties[0].isIntersecting &&
            hasNextPage &&
            typeof fetchNextPage === 'function'
          ) {
            fetchNextPage();
          }
        });

        if (node) {
          observer.current.observe(node);
        }
      },
      [disableFetchMore, isFetchingNextPage, hasNextPage, fetchNextPage]
    );

    const getItemSize = () => {
      return itemHeight;
    };

    const renderRepos: VariableSizeListProps['children'] = ({
      index,
      style,
    }) => {
      const repo: CardRepoProps | undefined =
        index > itemCount ? undefined : data[index];

      return (
        <S.ItemWrapper
          ref={(node) => {
            if (index === itemCount - 1) {
              lastElementRef(node);
            }
          }}
          style={style}
        >
          {!repo ? (
            <CardRepoSkeleton />
          ) : (
            <CardRepo
              name={repo.name}
              description={repo.description}
              githubUrl={repo.githubUrl}
              language={repo.language}
              stars={repo.stars}
            />
          )}
        </S.ItemWrapper>
      );
    };

    return (
      <ReactWindowScroller>
        {({ ref, outerRef, style, onScroll }) => (
          <VariableSizeList
            ref={ref}
            outerRef={outerRef}
            style={style}
            height={listHeight}
            width={listWidth}
            itemCount={renderItemCount}
            itemSize={getItemSize}
            onScroll={onScroll}
          >
            {renderRepos}
          </VariableSizeList>
        )}
      </ReactWindowScroller>
    );
  }
);
