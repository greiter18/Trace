import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERROR = 'REMOVE_SESSION_ERROR';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_SESSION_ERROR,
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => {
    return dispatch => {
        return SessionApiUtil.login(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
        },err =>{
                dispatch(receiveErrors(err.responseJSON))
        } )
    }
}


export const logout = (user) =>  {
    return dispatch => {
      debugger
        return SessionApiUtil.logout(user)
        .then(user => (
        dispatch(logoutCurrentUser(user))
        ))
    }
};
