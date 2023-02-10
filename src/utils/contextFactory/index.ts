import { createContext, useContext, Dispatch, Reducer } from 'react';

import { ActionWithType } from './interface';
import withProvider from './withProvider';

export default <State, Action extends ActionWithType>(
  reducer: Reducer<State, Action>,
  initialState: State
) => {
  const StateContext = createContext<State>({ ...initialState });
  const DispatchContext = createContext<Dispatch<Action>>((() => {}) as Dispatch<Action>);

  const useSelector = <T>(selector: (arg: State) => T) => {
    const state = useContext(StateContext);
    return selector(state);
  };

  const useDispatch = () => {
    const dispatch = useContext(DispatchContext);
    return dispatch;
  };

  const withContextProvider = withProvider({
    stateContext: StateContext,
    dispatchContext: DispatchContext,
    reducer,
    initialState
  });

  return { withContextProvider, useSelector, useDispatch, StateContext, DispatchContext };
};
