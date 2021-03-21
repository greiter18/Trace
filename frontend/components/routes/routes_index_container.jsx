import {connect} from 'react-redux';
import { fetchRoutes, updateRoute, deleteRoute } from '../../actions/routes_action';
import RoutesIndex from './routes_index'


const mstp = (store) => {
  return {
    routes: Object.values(store.routes)
  };
};

const mdtp = dispatch => {
  return {
    fetchRoutes: () => dispatch(fetchRoutes(workout)),
    
  }
}

export default connect(mstp,mdtp)(RoutesIndex);