import {connect} from 'react-redux';
import {fetchRoute, deleteRoute } from "../../actions/routes_action"
import RouteShow from "./routes_show"


const mstp = (store, ownProps) => {
  const routeId = ownProps.match.params.routeId
  return { 
    route: store.entities.routes[routeId] || {},
    currentUser: store.entities.users[store.session.id],
  };
};

const mdtp = dispatch => {
  return {
    fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
  }
}

export default connect(mstp,mdtp)(RouteShow);