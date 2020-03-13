import * as c from './constants';
import { Task, Group, User, SideBarContext, TaskCtxInstance } from '../config/types';
import axios from '../config/axios';
import { AxiosRequestConfig } from 'axios';

export const openTask = (task: Task) => ({
  type: c.OPEN_TASK,
  data: { 
    task
  } 
});

export const closeTask = (taskId: string) => ({
  type: c.CLOSE_TASK,
  data: { 
    taskId
  } 
});

export const setActiveTask = (task: Task) => ({
  type: c.SET_ACTIVE_TASK,
  data: { 
    activeTask: task
  } 
});

export const setActiveTaskTab = (activeKey: string) => ({
  type: c.SET_ACTIVE_TASK_TAB,
  data: { 
    activeKey
  } 
});

export const setUser = (user: User) => ({
  type: c.SET_USER,
  data: {
    user
  }
});

export const setActiveGroup = (group: Group) => ({
  type: c.SET_ACTIVE_GROUP,
  data: {
    group
  }
});

export const cancelTask = () => ({
  type: c.CANCEL_TASK
});

export const beginAsyncRequest = () => ({
  type: c.BEGIN_ASYNC_REQUEST
});

export const asyncRequestCompleted = () => ({
  type: c.ASYNC_REQUEST_COMPLETED
});

export const asyncRequestError = (err: any) => ({
  type: c.ASYNC_REQUEST_ERROR,
  payload: err
});

export const setTaskContextId = (taskKey: string, ctx: string | null) => ({
  type: c.SET_TASK_CONTEXT_ID,
  data: {
    taskKey,
    ctx
  }
});

export const setSideBarContext = (ctx: SideBarContext | null) => ({
  type: c.SET_SIDEBAR_CONTEXT,
  data: {
    ctx
  }
});

export const setTaskContextInstance = (taskKey: string, instance: TaskCtxInstance | null) => ({
  type: c.SET_TASK_CONTEXT_INSTANCE,
  data: {
    taskKey,
    instance
  }
});

interface Options {
  method: string,
  url: string,
  data: any
};

export const asyncRequest = async (options: Options, dispatch?: Function) => {
  const { method, url, data } = options;
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

