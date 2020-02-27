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
  type: string
};

export interface Context {
  groups: Group[],
  users: User[],
  activeGroup: Group | null,
  tasks: Task[],
  activeTask?: Task | null
  user: any | null
};