import React, { useReducer } from 'react'
import { Context } from '../config/types';
import { tasks } from '../config/tasks';
import reducer from './reducer';
import * as Tasks from '../components/tasks';

const getDefaultContext = (): Context => ({
  taskDefinitions: tasks,
  tasksRunning: [{
    title: 'View Dashboard',
    content: Tasks.ViewDashboard,
    key: 'View Dashboard',
    context: {
      type: 'User'
    },
    taskType: 'view'
  }, {
    title: 'View Group',
    content: Tasks.ViewGroup,
    key: 'View Group',
    context: {
      type: 'Group'
    },
    taskType: 'view'
  }],
  activeTask: 'View Group',
  user: null, // dumbledore
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