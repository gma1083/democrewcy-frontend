import { TaskDefinitions } from './types';

export const tasks: TaskDefinitions = {
  "Create a Group": {
    key: "create-group",
    title: 'Create a Group',
    component: 'CreateGroup',
    type: 'create',
    ctxType: 'Group'
  },
  "Create an Account": {
    key: "create-account",
    title: 'Create an Account',
    component: 'CreateAccount',
    type: 'create',
    ctxType: 'Account'
  },
  "Create an Event": {
    key: "create-event",
    title: 'Create an Event',
    component: 'CreateEvent',
    type: 'create',
    ctxType: 'Event'
  },
  "Create a Motion": {
    key: "create-motion",
    title: 'Create a Motion',
    component: 'CreateMotion',
    type: 'create',
    ctxType: 'Motion'
  },
  "View an Account": {
    key: "view-account",
    title: 'View an Account',
    component: 'ViewAccount',
    type: 'view',
    ctxType: 'Account'
  },
  "View a Group": {
    key: "view-group",
    title: 'View a Group',
    component: 'ViewGroup',
    type: 'view',
    ctxType: 'Group'
  },
  "View Dashboard": {
    key: "view-dashboard",
    title: 'View Dashboard',
    component: 'ViewDashboard',
    type: 'view',
    ctxType: 'User'
  }
};