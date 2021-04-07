import {connect} from 'react-redux';
import { createRoute } from '../../actions/routes_action';
import RouteForm from './routes_form'

const mstp = (store, ownProps) => {
  return {
    title: '',
    session: store.session,
    formType: "Create Route",
    history: ownProps.history
  };
};

const mdtp = dispatch => {
  return {
    action: route => dispatch(createRoute(route))
  }
}

export default connect(mstp,mdtp)(RouteForm);