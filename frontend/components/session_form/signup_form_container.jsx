import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: 'signup'
  }
}
const mdtp = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  }
}

export default connect(mstp, mdtp)(SessionForm)