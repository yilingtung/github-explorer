import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import simpleOrgReducer from './simpleOrg';
import organizationReducer from './organization';

export const store = configureStore({
  reducer: {
    simpleOrg: simpleOrgReducer,
    organization: organizationReducer,
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
