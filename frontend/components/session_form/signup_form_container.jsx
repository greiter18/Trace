import { connect } from 'react-redux';
import React from 'react';
import { removeErrors, signup ,login } from '../../actions/session_actions';
import SessionForm from './session_form';
// import { login } from '../../actions/session_actions';

const mstp = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: 'signup'
  }
}
const mdtp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mstp, mdtp)(SessionForm)