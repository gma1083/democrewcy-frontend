import { SET_ACTIVE_TASK, SET_ACTIVE_GROUP, SET_RUNNING_TASK } from './constants';
import { Group, Task } from '../config/types';

export const setActiveTask = (task: Task) => ({
  type: SET_ACTIVE_TASK,
  data: { 
    activeTask: task
  } 
});

export const setActiveGroup = (group: Group) => ({
  type: SET_ACTIVE_GROUP,
  data: {
    activeGroup: group
  }
});

export const setRunningTask = (taskRunning: boolean) => ({
  type: SET_RUNNING_TASK,
  data: {
    taskRunning
  }
})
