import React, { useReducer } from 'react'
import { Context } from '../config/types';
import { tasks } from '../config/tasks';
import reducer from './reducer';

const getDefaultContext = (): Context => ({
  tasks,
  activeTask: null,
  taskCtx: null,
  user: null,
  sidebar: null
});

const ctx = React.createContext({});

const { Provider, Consumer } = ctx;

interface AppProviderProps {
  children: any
}

const AppProvider: React.SFC<AppProviderProps> = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, getDefaultContext());

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
}

function withAppContext(Component: any) {
  return function WrapperComponent(props: any) {
      return (
          <Consumer>
            {ctx => <Component {...props} {...ctx} />}
          </Consumer>
      );
  };
}
 
export {
  getDefaultContext,
  AppProvider,
  withAppContext
}
export default ctx;