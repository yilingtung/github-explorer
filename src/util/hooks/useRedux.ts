import { bindActionCreators } from '@reduxjs/toolkit';

import type { RootState } from '../../store';
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';

interface DefaultActionMap {
  [key: string]: (...params: any[]) => void;
}

export const useRedux = <ReturnState, ActionMap extends DefaultActionMap>(
  selector: (s: RootState) => ReturnState,
  actions: ActionMap
): [ReturnState, ActionMap] => {
  const state = useAppSelector<ReturnState>(selector);
  const dispatch = useAppDispatch();

  const boundActions = bindActionCreators(actions, dispatch);

  return [state, boundActions] as [ReturnState, ActionMap];
};
