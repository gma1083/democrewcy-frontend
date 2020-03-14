import { Task } from './types';

export const tasks: Task[] = [{
  key: "create-group",
  title: 'Create a Group',
  component: 'CreateGroup',
  type: 'create',
  ctx: 'Group'
},
{
  key: "create-account",
  title: 'Create an Account',
  component: 'CreateAccount',
  type: 'create',
  ctx: 'Account'
},
{
  key: "create-event",
  title: 'Create an Event',
  component: 'CreateEvent',
  type: 'create',
  ctx: 'Event'
},
{
  key: "create-motion",
  title: 'Create a Motion',
  component: 'CreateMotion',
  type: 'create',
  ctx: 'Motion'
},
{
  key: "view-account",
  title: 'View an Account',
  component: 'ViewAccount',
  type: 'view',
  ctx: 'Account'
},
{
  key: "view-group",
  title: 'View a Group',
  component: 'ViewGroup',
  type: 'view',
  ctx: 'Group'
},
{
  key: "view-dashboard",
  title: 'View Dashboard',
  component: 'ViewDashboard',
  type: 'view',
  ctx: 'User'
}];