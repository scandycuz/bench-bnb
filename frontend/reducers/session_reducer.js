import { RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT } from '../util/session_api_util';
import merge from 'lodash/merge';

const defaultState = {
  current_user: null,
  errors: []
}

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { current_user: action.current_user, errors: [] };
    case RECEIVE_ERRORS:
      return { current_user: null, errors: action.errors };
    case LOGOUT:
      return defaultState;
  }

  return state;
}

export default SessionReducer;
