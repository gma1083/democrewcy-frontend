import { getDefaultContext } from '.';
import * as c from './constants';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case c.CLEAR_STATE:
      return getDefaultContext();
    case c.SET_ACTIVE_TASK:
      return { 
        ...state, 
        activeTask: action.data.activeTask, 
        taskCtx: {
          type: action.data.activeTask.ctx
        }
      };
    case c.SET_USER: 
      return { ...state, user: action.data.user }
    case c.SET_ACTIVE_GROUP:
      return { ...state, activeGroup: action.data.group }
    case c.CANCEL_TASK:
      return { ...state, activeTask: null }
    case c.BEGIN_ASYNC_REQUEST:
      return { ...state, isLoading: true }
    case c.ASYNC_REQUEST_COMPLETED:
      return { ...state, isLoading: false }
    case c.ASYNC_REQUEST_ERROR:
      return { ...state, err: { status: true, message: action.payload } }
    case c.SET_TASK_CONTEXT: {
      let stateCopy = { ...state };
      stateCopy.taskCtx.ctx = action.data.ctx;
      return stateCopy;
    }
    case c.SET_SIDEBAR_CONTEXT: {
      let stateCopy = { ...state };
      stateCopy.sidebar = action.data.ctx;
      return stateCopy; 
    }
  }
};

export default reducer;