import axios from 'axios';

// Axios
export const CancelToken = axios.CancelToken;

// Noomman
export interface Event {
  name: string, 
  description: string, 
  startTime: string, 
  endTime: string
};

export interface Position {
  title: string,
  description: string,
  displayAs: string
};

export interface Motion {
  title: string,
  description: string,
  proposedBy: Position
};

export interface Member {
  name: string,
  position: Position
};

export interface User {
  firstName: string,
  lastName: string
};

export interface Group {
  name: string,
  description: string,
  events: Event[],
  members: Member[],
  motions: Motion[],
  positions: Position[],
};

// UI
export interface Task {
  key: string,
  title: string,
  component: string,
  type: string,
  ctxType: TaskCtxType
};

export type TaskCtxType = 'Event'| 'Position' | 'Motion' | 'User' | 'Group' | 'Account';
export type TaskType = 'view' | 'edit' | 'create';
export type TaskCtxInstance = Event | Position | Motion | User | Group;
export type InstanceId = string | null;
export type ClassName = string;

export interface TaskContext {
  type: ClassName;
  ctx?: InstanceId;
  instance?: TaskCtxInstance;
};

export interface SideBarContext {
  groups: Group[];
  users: User[];
};

export interface TaskTab {
  title: string;
  content: React.ComponentType<any>;
  key: string;
  context: TaskContext;
  taskType: TaskType
};

export interface ClassModels {
  [key: string]: Object
};

export interface TaskDefinitions {
  [key: string]: Task
};


export interface Context {
  taskDefinitions: TaskDefinitions,
  tasksRunning: TaskTab[],
  activeTask: string,
  sidebar: SideBarContext,
  classModels?: ClassModels
  user?: string,
};