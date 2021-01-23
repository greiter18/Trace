import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import dashboard from './dashboard';

const mstp = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mstp,mdtp)(dashboard);