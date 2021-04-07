import {
  RECEIVE_ROUTE,
  RECEIVE_ALL_ROUTES,
  REMOVE_ROUTE
} from '../actions/routes_action';


const routeReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ROUTE:
      debugger
      return action.route
    case RECEIVE_ALL_ROUTES:
      console.log('action--------------',action)
      return Object.assign({}, state, action.routes)
    case REMOVE_ROUTE:
      console.log('action--------------',action)
      const newState = Object.assign({}, state, action.routes);
      delete newState[action.routeId];
      return newState;
    default:
      return state;
  }
}

export default routeReducer;