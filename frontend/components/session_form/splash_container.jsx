import Splash from "./splash"
import { login } from '../../actions/session_actions';
import { connect } from "react-redux"
import {clearRoutes} from '../../actions/routes_action'
import {clearWorkouts} from '../../actions/workout_actions'


const mstp = (store, ownProps) => {
  return{}
}

const mdtp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearRoutes: () => dispatch(clearRoutes()),
    clearWorkouts: () => dispatch(clearWorkouts()),
  }
}

export default connect(mstp,mdtp)(Splash)