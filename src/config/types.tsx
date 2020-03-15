import axios from 'axios';
import React from 'react';

// Axios
export const CancelToken = axios.CancelToken;

// Noomman
export interface NoommanModel {
  className: string,
  id: string,
  displayAs: string
};

export interface Event extends NoommanModel {
  name: string, 
  description: string, 
  startTime: string, 
  endTime: string
};

export interface Position extends NoommanModel {
  title: string,
  description: string,
};

export interface Motion extends NoommanModel {
  title: string,
  description: string,
  proposedBy: Position
};

export interface Member {
  name: string,
  position: Position
};

export interface User extends NoommanModel {
  firstName: string,
  lastName: string
};

export interface Group extends NoommanModel {
  name: string,
  description: string,
  events: Event[],
  members: Member[],
  motions: Motion[],
  positions: Position[],
};

// UI
export interface Module {
  [key: string]: React.ReactNode
};

export interface Task {
  key: string,
  title: string,
  component: string,
  type: string,
  ctxType: TaskContextType
};

export type TaskContextType = 'Event'| 'Position' | 'Motion' | 'User' | 'Group' | 'Account';
export type TaskType = 'view' | 'edit' | 'create';
export type TaskContextInstance = Event | Position | Motion | User | Group;

export interface TaskContext {
  type: TaskContextType;
  instanceId: string;
  instance?: TaskContextInstance;
};

export interface TaskTab {
  title: string;
  content: React.ComponentType<any>;
  key: string;
  context: TaskContext;
  taskType: TaskType
};

export interface Attribute {
  name: string,
  required: boolean,
  type: string
};

export interface Relationship {
  name: string,
  required: boolean,
  toClass: string,
  singular: boolean,
  mirrorRelationship?: string
};

export type SuperClass = string;

export type SubClass = string;

export interface ClassModel {
  attributes: Attribute[],
  relationships: Relationship[],
  superClasses: SuperClass[],
  subClasses: SubClass[]
};

export interface ClassModels {
  [key: string]: ClassModel
};

export interface TaskDefinitions {
  [key: string]: Task
};

export interface Context {
  taskDefinitions: TaskDefinitions,
  tasksRunning: TaskTab[],
  activeTask: string,
  classModels?: ClassModels
  user?: string,
};