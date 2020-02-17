import { getDefaultContext } from '.';
import { 
  CLEAR,
  END_TASK,
  SET_EVENTS,
  SET_MEMBERS,
  SET_MOTIONS,
  SET_ACTIVE_GROUP,
  SET_ACTIVE_TASK
} from './constants';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case CLEAR:
      return getDefaultContext();
    case SET_EVENTS:
      return { ...state, events: action.data.events };
    case SET_MEMBERS:
      return { ...state, members: action.data.members };
    case SET_MOTIONS:
      return { ...state, motions: action.data.motions };
    case SET_ACTIVE_GROUP:
      return { ...state, activeGroup: action.data.activeGroup };
    case SET_ACTIVE_TASK:
      return { ...state, activeTask: action.data.activeTask, runningTask: true };
    case END_TASK:
      return { ...state, runningTask: true };
  }
};

export default reducer;