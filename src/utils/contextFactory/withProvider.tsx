import { Context, Dispatch, Reducer, ComponentType, useReducer } from 'react';

import { ActionWithType } from './interface';

// {} is valid as props
interface Props<State, Action> {
  stateContext: Context<State>;
  dispatchContext: Context<Dispatch<Action>>;
  reducer: Reducer<State, Action>;
  initialState: State;
}

// {} is valid as props
const withProvider = <ComponentProps extends {}, State, Action extends ActionWithType>({
  stateContext: StateContext,
  dispatchContext: DispatchContext,
  reducer,
  initialState
}: Props<State, Action>) => (WrappedComponent: ComponentType<ComponentProps>) => {
  function ProviderWrapper(props: ComponentProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <WrappedComponent {...props} />
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  }

  return ProviderWrapper;
};

export default withProvider;
