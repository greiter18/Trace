import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: `login`
  }
}
const mdtp = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mstp,mdtp)(SessionForm)