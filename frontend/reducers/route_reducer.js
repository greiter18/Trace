import {
  RECEIVE_ROUTE,
  RECEIVE_ALL_ROUTES,
  REMOVE_ROUTE
} from '../actions/routes_action';


const routeReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ROUTE:
      return action.routes
    case RECEIVE_ALL_ROUTES:
      return Object.assign({}, state, { [action.route.id]: action.routes })
    case REMOVE_ROUTE:
      const newState = Object.assign({}, state);
      delete newState[action.routeId];
      return newState;
    default:
      return state;
  }
}

export default routeReducer;