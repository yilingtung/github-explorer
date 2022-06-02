import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { GITHUB_API_ENDPOINT } from '../util/constants';
import errorMap from '../util/maps/errorMap';
import type { RootState } from '.';
import type {
  FetchStatus,
  GithubFilterDirection,
  GithubFilterSort,
  GithubFilterType,
  GithubRepository,
  ResponseData,
} from '../../types';
import {
  filterDirections,
  filterSorts,
  filterTypes,
} from '../util/data/filters';
import getOrgFilterParamsKey from '../util/functions/getOrgFilterParamsKey';

export interface ReposResonseData {
  meta: {
    mightHasNextPage: boolean;
    currentPage: number;
  };
  repoNames: string[];
}

export interface RepositoryState {
  dataByRepoFullName: Record<string, GithubRepository>;
  /**
   * Data structure of nameListByParams:
   * {
   *  [{org_name}/{type}/{sort}/{direction}]: ReposResonseData
   * }
   */
  nameListByParams: Record<string, ReposResonseData>;
  list: {
    status: FetchStatus;
    error: string;
  };
  singleData: {
    status: FetchStatus;
    error: string;
  };
}

const initialState: RepositoryState = {
  dataByRepoFullName: {},
  nameListByParams: {},
  list: {
    status: 'idle',
    error: '',
  },
  singleData: {
    status: 'idle',
    error: '',
  },
};

export const fetchRepositoriesByOrg = createAsyncThunk<
  {
    params: string;
    nameListData: ReposResonseData;
    dataByRepoFullName: RepositoryState['dataByRepoFullName'];
  },
  {
    org: string;
    page?: number;
    per_page?: number;
    type?: GithubFilterType;
    sort?: GithubFilterSort;
    direction?: GithubFilterDirection;
  },
  {
    rejectValue: { message: string };
  }
>(
  'repository/fetchRepositoriesByOrg',
  async (
    {
      org,
      page = 1,
      per_page = 15, // Default = 30
      type = filterTypes[0],
      sort = filterSorts[0],
      direction = filterDirections[0],
    },
    { rejectWithValue }
  ) => {
    try {
      const { status, message, data } = (await fetch(
        `${GITHUB_API_ENDPOINT}/orgs/${org}/repos?type=${type}&sort=${sort}&direction=${direction}&per_page=${per_page}&page=${page}`
      ).then((r) =>
        r
          .json()
          .then((d) => ({ status: r.status, message: d.message, data: d }))
      )) as ResponseData<{ data: GithubRepository[] }>;

      if (status !== 200) {
        throw new Error(message);
      }

      const normalizedData = data.reduce(
        (preVal, curVal) => ({
          names: [...preVal.names, curVal.full_name],
          byNames: {
            ...preVal.byNames,
            [curVal.full_name]: curVal,
          },
        }),
        {
          names: [],
          byNames: {},
        } as {
          names: ReposResonseData['repoNames'];
          byNames: RepositoryState['dataByRepoFullName'];
        }
      );

      return {
        params: getOrgFilterParamsKey({
          org,
          type,
          sort,
          direction,
        }),
        nameListData: {
          meta: {
            mightHasNextPage: data.length >= per_page,
            currentPage: page,
          },
          repoNames: normalizedData.names,
        },
        dataByRepoFullName: normalizedData.byNames,
      };
    } catch (err) {
      let errMessage = errorMap.COMMON;

      if (err instanceof Error && err.message) {
        errMessage = err.message;
      }

      if (errMessage.includes('API rate limit')) {
        errMessage = errorMap.API_RATE_LIMIT;
      }

      return rejectWithValue({ message: errMessage });
    }
  }
);

export const fetchSingleRepo = createAsyncThunk<
  {
    repoFullName: string;
    data: GithubRepository;
  },
  {
    org: string;
    repoName: string;
  },
  {
    rejectValue: { message: string };
  }
>(
  'repository/fetchSingleRepo',
  async ({ org, repoName }, { rejectWithValue }) => {
    try {
      const { status, message, data } = (await fetch(
        `${GITHUB_API_ENDPOINT}/repos/${org}/${repoName}`
      ).then((r) =>
        r
          .json()
          .then((d) => ({ status: r.status, message: d.message, data: d }))
      )) as ResponseData<{ data: GithubRepository }>;

      if (status !== 200) {
        throw new Error(message);
      }

      return {
        repoFullName: `${org}/${repoName}`,
        data,
      };
    } catch (err) {
      let errMessage = errorMap.COMMON;

      if (err instanceof Error && err.message) {
        errMessage = err.message;
      }

      if (errMessage.includes('API rate limit')) {
        errMessage = errorMap.API_RATE_LIMIT;
      }

      return rejectWithValue({ message: errMessage });
    }
  }
);

export const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositoriesByOrg.pending, (state) => {
        state.list.status = 'loading';
        state.list.error = '';
      })
      .addCase(fetchRepositoriesByOrg.fulfilled, (state, action) => {
        state.list.status = 'success';
        state.nameListByParams[action.payload.params] = {
          ...state.nameListByParams[action.payload.params],
          meta: action.payload.nameListData.meta,
          repoNames:
            action.payload.nameListData.meta.currentPage === 1
              ? action.payload.nameListData.repoNames
              : [
                  ...state.nameListByParams[action.payload.params].repoNames,
                  ...action.payload.nameListData.repoNames,
                ],
        };
        state.dataByRepoFullName = {
          ...state.dataByRepoFullName,
          ...action.payload.dataByRepoFullName,
        };
      })
      .addCase(fetchRepositoriesByOrg.rejected, (state, action) => {
        state.list.status = 'failed';
        state.list.error = action.payload?.message || '';
      })
      .addCase(fetchSingleRepo.pending, (state) => {
        state.singleData.status = 'loading';
        state.singleData.error = '';
      })
      .addCase(fetchSingleRepo.fulfilled, (state, action) => {
        state.singleData.status = 'success';
        state.dataByRepoFullName[action.payload.repoFullName] =
          action.payload.data;
      })
      .addCase(fetchSingleRepo.rejected, (state, action) => {
        state.singleData.status = 'failed';
        state.singleData.error = action.payload?.message || '';
      });
  },
});

export default repositorySlice.reducer;

export const selectRepository = (state: RootState) => state.repository;
