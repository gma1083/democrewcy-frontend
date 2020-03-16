import { getDefaultContext } from '.';
import * as c from './constants';
import * as Tasks from '../components/tasks';
import { TaskTab, Task, Module, Action, Context } from '../config/types';
import shortid from 'shortid';

const createNewTaskTab = (task: Task) => ({ 
  title: task.title,
  content: (Tasks as Module)[task.component],
  key: `${task.title}-${shortid.generate()}`,
  context: {
    type: task.ctxType,
    instanceId: ''
  },
  taskType: task.type
} as TaskTab);

const reducer = (state: Context, action: Action) => {
  switch (action.type) {
    case c.CLEAR_STATE:
      return getDefaultContext();
    case c.SET_USER: 
      return { ...state, user: action.data.user };
    case c.SET_ACTIVE_TASK_TAB:
      return { ...state, activeTask: action.data.activeKey };
    case c.OPEN_TASK: {
      const task = action.data.task;
      let stateCopy = { ...state };
      const newTaskTab = createNewTaskTab(task);
      stateCopy.tasksRunning = stateCopy.tasksRunning.concat([newTaskTab]);
      stateCopy.activeTask = newTaskTab.key;
      return stateCopy;
    }
    case c.OPEN_TASK_WITH_INSTANCE_ID: {
      const task = action.data.task;
      let stateCopy = { ...state };
      let newTaskTab = createNewTaskTab(task);
      newTaskTab.context.instanceId = action.data.instanceId;
      stateCopy.tasksRunning = stateCopy.tasksRunning.concat([newTaskTab]);
      stateCopy.activeTask = newTaskTab.key;
      return stateCopy;
    }
    case c.CLOSE_TASK: {
      const { taskKey } = action.data;
      let stateCopy = { ...state };
      stateCopy.tasksRunning = stateCopy.tasksRunning.filter((task: TaskTab) => task.key !== taskKey);
      stateCopy.activeTask = stateCopy.tasksRunning.length > 0 ? stateCopy.tasksRunning[0].key : '';
      return stateCopy;
    }
    case c.SET_TASK_CONTEXT_ID: {
      let stateCopy = { ...state };
      let task = stateCopy.tasksRunning.find((task: TaskTab) => task.key === action.data.taskKey);
      if (task)
        task.context.instanceId = action.data.instanceId;
      return stateCopy;
    }
    case c.SET_TASK_CONTEXT_INSTANCE: {
      let stateCopy = { ...state };
      let task = stateCopy.tasksRunning.find((task: TaskTab) => task.key === action.data.taskKey);
      if (task)
        task.context.instance = action.data.instance;
      return stateCopy;
    }
    case c.SET_CLASS_MODELS:
      return { ...state, classModels: action.data.classModels };
  }
};

export default reducer;