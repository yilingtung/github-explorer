import { useRef, memo } from 'react';
import { FixedSizeGrid, FixedSizeGridProps, areEqual } from 'react-window';
import { ReactWindowScroller } from 'react-window-scroller';

import { CARD_REPO_HEIGHT, GRID_COLUMN_COUNT } from '../../../util/constants';

import CardRepo, { CardRepoSkeleton, CardRepoProps } from '../CardRepo';

import * as S from './styles';

export interface RepoListGridProps {
  listHeight: number;
  listWidth: number;
  data: CardRepoProps[];
  disableFetchMore?: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage?: () => void;
  onClickRepo?: (repoName: string) => void;
}

export const RepoListGrid = memo(
  ({
    listHeight,
    listWidth,
    data,
    // 如果發生 API rate limit 就轉為手動觸發 fetchNextPage
    disableFetchMore = false,
    hasNextPage = false,
    isFetchingNextPage = false,
    fetchNextPage,
    onClickRepo = () => undefined,
  }: RepoListGridProps) => {
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
    const lastElementRef = (node: HTMLDivElement | null) => {
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
    };

    const renderRepos: FixedSizeGridProps['children'] = memo(
      ({ columnIndex, rowIndex, style }) => {
        const index = GRID_COLUMN_COUNT * rowIndex + columnIndex;
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
            {!repo && isFetchingNextPage ? (
              <CardRepoSkeleton />
            ) : !repo ? null : (
              <CardRepo
                name={repo.name}
                description={repo.description}
                githubUrl={repo.githubUrl}
                language={repo.language}
                stars={repo.stars}
                onClick={() => onClickRepo(repo.name as string)}
              />
            )}
          </S.ItemWrapper>
        );
      },
      areEqual
    );

    return (
      <ReactWindowScroller isGrid>
        {({ ref, outerRef, style, onScroll }) => (
          <FixedSizeGrid
            ref={ref}
            outerRef={outerRef}
            style={style}
            columnCount={GRID_COLUMN_COUNT}
            columnWidth={listWidth / GRID_COLUMN_COUNT}
            rowCount={Math.ceil(renderItemCount / GRID_COLUMN_COUNT)}
            rowHeight={itemHeight}
            height={listHeight}
            width={listWidth}
            onScroll={onScroll}
          >
            {renderRepos}
          </FixedSizeGrid>
        )}
      </ReactWindowScroller>
    );
  }
);
