import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { GITHUB_README_ENDPOINT } from '../util/constants';
import errorMap from '../util/maps/errorMap';
import type { RootState } from '.';
import type { FetchStatus } from '../../types';

export interface ReadmeState {
  dataByRepoFullName: Record<string, string | null>;
  singleData: {
    status: FetchStatus;
    error: string;
  };
}

const initialState: ReadmeState = {
  dataByRepoFullName: {},
  singleData: {
    status: 'idle',
    error: '',
  },
};

export const fetchReadme = createAsyncThunk<
  {
    repoFullName: string;
    data: string | null;
  },
  {
    org: string;
    repoName: string;
    defaultBarnch: string;
  },
  {
    rejectValue: { message: string };
  }
>(
  'readme/fetchReadme',
  async ({ org, repoName, defaultBarnch }, { rejectWithValue }) => {
    try {
      const response = (await fetch(
        `${GITHUB_README_ENDPOINT}/${org}/${repoName}/${defaultBarnch}/README.md`
      ).then((r) => r.text())) as string;

      return {
        repoFullName: `${org}/${repoName}`,
        data: response === '404: Not Found' ? null : response,
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

export const readmeSlice = createSlice({
  name: 'readme',
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadme.pending, (state) => {
        return {
          ...state,
          singleData: {
            ...state.singleData,
            status: 'loading',
            error: '',
          },
        };
      })
      .addCase(fetchReadme.fulfilled, (state, action) => {
        return {
          ...state,
          singleData: {
            ...state.singleData,
            status: 'success',
          },
          dataByRepoFullName: {
            ...state.dataByRepoFullName,
            [action.payload.repoFullName]: action.payload.data,
          },
        };
      })
      .addCase(fetchReadme.rejected, (state, action) => {
        return {
          ...state,
          singleData: {
            ...state.singleData,
            status: 'failed',
            error: action.payload?.message || '',
          },
        };
      });
  },
});

export default readmeSlice.reducer;

export const selectReadme = (state: RootState) => state.readme;
