import Splash from "./splash"
import { login } from '../../actions/session_actions';
import { connect } from "react-redux"

const mstp = (store, ownProps) => {
  return{}
}

const mdtp = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(mstp,mdtp)(Splash)