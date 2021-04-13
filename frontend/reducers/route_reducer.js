import {
  RECEIVE_ROUTE,
  RECEIVE_ALL_ROUTES,
  REMOVE_ROUTE,
  CLEAR_ROUTES
} from '../actions/routes_action';

import {
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';



const routeReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ROUTE:
      return action.route
    case RECEIVE_ALL_ROUTES:
      debugger
      return Object.assign({}, state, action.routes)
    case REMOVE_ROUTE:
      const newState = Object.assign({}, state, action.routes);
      delete newState[action.routeId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return  {}
    case CLEAR_ROUTES:
      debugger
      return  {}
    default:
      return state;
  }
}

export default routeReducer;