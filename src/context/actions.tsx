import * as c from './constants';
import { Task, Group, User, SideBarContext } from '../config/types';
import axios from '../config/axios';
import { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

export const setActiveTask = (task: Task) => ({
  type: c.SET_ACTIVE_TASK,
  data: { 
    activeTask: task
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

export const setTaskContext = (ctx: string | null) => ({
  type: c.SET_TASK_CONTEXT,
  data: {
    ctx
  }
});

export const setSideBarContext = (ctx: SideBarContext | null) => ({
  type: c.SET_SIDEBAR_CONTEXT,
  data: {
    ctx
  }
});

interface Options {
  method: string,
  url: string,
  data: any
};

export const asyncRequest = async (options: Options, dispatch: Function) => {
  const { method, url, data } = options;
  dispatch(beginAsyncRequest());
  try {
    const response = await axios({
      method: method as AxiosRequestConfig["method"],
      url: url as AxiosRequestConfig["url"],
      data: data as AxiosRequestConfig["data"],
    });
    dispatch(asyncRequestCompleted());
    return response;
  }
  catch (err) {
    console.log(JSON.stringify(err))
  }
};

