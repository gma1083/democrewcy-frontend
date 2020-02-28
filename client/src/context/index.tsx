import React, { useReducer } from 'react'
import { Context } from '../config/types';
import { groupData, userData, taskData } from '../config/data';
import reducer from './reducer';

const getDefaultContext = (): Context => ({
  groups: groupData,
  users: userData,
  tasks: taskData,
  activeTask: null,
  activeGroup: null,
  user: null
});

const ctx = React.createContext({});

const AppConsumer = ctx.Consumer;

const { Provider } = ctx;

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

export {
  getDefaultContext,
  AppProvider,
  AppConsumer,
}
export default ctx;