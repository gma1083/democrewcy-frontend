export interface Event {
  name: string, 
  description: string, 
  startTime: string, 
  endTime: string
};

export interface Position {
  title: string,
  description: string
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
};

export interface Task {
  key: string,
  title: string,
  component: string,
  type: string,
  ctx: TaskCtxType
};
export type TaskCtxType = 'Event'| 'Position' | 'Motion' | 'User' | 'Group' | 'Account';
export type TaskType = 'view' | 'edit' | 'create';
export type TaskCtx = Event | Position | Motion | User | Group;

export interface TaskContext {
  type: string,
  ctx: string | null
};

export interface SideBarContext {
  groups: Group[],
  users: User[]
};
export interface Context {
  tasks: Task[],
  activeTask?: Task | null,
  taskCtx: TaskContext | null,
  user: any | null,
  sidebar: SideBarContext | null
};