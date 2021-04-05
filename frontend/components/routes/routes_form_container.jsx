import {connect} from 'react-redux';
import { createRoute } from '../../actions/routes_action';
import RouteForm from './routes_form'

const mstp = (store) => {
  console.log('container------',store)
  return {
    session: store.session,
    formType: "Create Route"
  };
};

const mdtp = dispatch => {
  debugger
  return {
    createRoute: route => dispatch(createRoute(route))
  }
}

export default connect(mstp,mdtp)(RouteForm);