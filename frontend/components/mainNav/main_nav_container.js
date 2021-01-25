import MainNav from './main_nav';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mstp = ({ session, entities: { users } }) => {
  return{
    currentUser: users[session.id]
  }
}

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mstp, mdtp)(MainNav);


{/* <MainNav someProp={someProp}/>
<MainNav logout={logout}/> */}