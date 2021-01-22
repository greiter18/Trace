import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: `login`
  }
}
const mdtp = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  }
}

export default connect(mstp,mdtp)(SessionForm)