import React, { useReducer } from 'react'
import {  Group, User, Task } from './types';
import { groupData, userData, taskData } from './types';

export interface Store {
  groups: Group[],
  users: User[],
  activeGroup?: Group,
  tasks: Task[],
  activeTask?: Task | null,
  runningTask: boolean
};

const getDefaultStore = (): Store => ({
  groups: groupData,
  users: userData,
  tasks: taskData,
  runningTask: false,
  activeTask: null
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CLEAR":
      return getDefaultStore();
    case "SET_EVENTS":
      return { ...state, events: action.data.events };
    case "SET_MEMBERS":
      return { ...state, members: action.data.members };
    case "SET_MOTIONS":
      return { ...state, motions: action.data.motions };
    case "SET_ACTIVE_GROUP":
      return { ...state, activeGroup: action.data.activeGroup };
    case "SET_ACTIVE_TASK":
      console.log('setting active task')
      console.log(action.data.activeTask)
      return { ...state, activeTask: action.data.activeTask, runningTask: true };
  }
};

const Store = React.createContext({});
const { Provider } = Store;

export interface AppProviderProps {
  children: any
}

export const AppProvider: React.SFC<AppProviderProps> = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, getDefaultStore());

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
}

export const AppConsumer = Store.Consumer;

export default Store;