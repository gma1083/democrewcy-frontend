import React, { useReducer } from 'react'
import { Event, Member, Motion, Group, User } from './types';
import { eventData } from './components/Events';
import { memberData } from './components/Members';
import { motionData } from './components/Motions';
import { groupData, userData } from './types';

export interface Store {
  events: Event[],
  members: Member[],
  motions: Motion[],
  groups: Group[],
  users: User[]
};

const getDefaultStore = (): Store => ({
  events: eventData,
  members: memberData,
  motions: motionData,
  groups: groupData,
  users: userData
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