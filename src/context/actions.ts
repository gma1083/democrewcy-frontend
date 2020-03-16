import * as c from './constants';
import { Task, User, TaskContextInstance, Action } from '../config/types';
import axios from '../config/axios';
import { AxiosRequestConfig } from 'axios';

export const openTask = (task: Task) => ({
  type: c.OPEN_TASK,
  data: { 
    task
  } 
} as Action);

export const openTaskWithInstanceId = (task: Task, instanceId: string) => ({
  type: c.OPEN_TASK_WITH_INSTANCE_ID,
  data: { 
    task,
    instanceId
  } 
} as Action);

export const closeTask = (taskKey: string) => ({
  type: c.CLOSE_TASK,
  data: { 
    taskKey
  } 
} as Action);

export const setActiveTaskTab = (activeKey: string) => ({
  type: c.SET_ACTIVE_TASK_TAB,
  data: { 
    activeKey
  } 
} as Action);

export const setUser = (user: User) => ({
  type: c.SET_USER,
  data: {
    user
  }
} as Action);

export const setTaskContextId = (taskKey: string, instanceId: string | null) => ({
  type: c.SET_TASK_CONTEXT_ID,
  data: {
    taskKey,
    instanceId
  }
} as Action);

export const setTaskContextInstance = (taskKey: string, instance: TaskContextInstance | null) => ({
  type: c.SET_TASK_CONTEXT_INSTANCE,
  data: {
    taskKey,
    instance
  }
} as Action);

export const setClassModels = (classModels: Object) => ({
  type: c.SET_CLASS_MODELS,
  data: {
    classModels
  }
} as Action);

interface Options {
  method: string,
  url: string,
  data?: any
};

export const asyncRequest = async (options: Options) => {
  let { method, url, data } = options;
  data = data || {};

  try {
    const response = await axios({
      method: method as AxiosRequestConfig["method"],
      url: url as AxiosRequestConfig["url"],
      data: data as AxiosRequestConfig["data"],
    });
    return response;
  }
  catch (error) {
    console.log(JSON.stringify(error))
  }
};

