import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import simpleOrgReducer from './simpleOrg';
import organizationReducer from './organization';
import repositoryReducer from './repository';
import readmeReducer from './readme';

export const store = configureStore({
  reducer: {
    simpleOrg: simpleOrgReducer,
    organization: organizationReducer,
    repository: repositoryReducer,
    readme: readmeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
