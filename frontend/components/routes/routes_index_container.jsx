import {connect} from 'react-redux';
import { fetchRoutes, updateRoute, deleteRoute } from '../../actions/routes_action';
import RoutesIndex from './routes_index'


const mstp = (store) => {
  console.log('store--------------',store)
  return {
    session: store.session,
    routes: Object.values(store.entities.routes)
  };
};

const mdtp = dispatch => {
  return {
    fetchRoutes: (id) => dispatch(fetchRoutes(id)),
    deleteRoute: (id) => dispatch(deleteRoute(id))
  }
}

export default connect(mstp,mdtp)(RoutesIndex);