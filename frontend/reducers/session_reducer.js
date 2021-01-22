import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const nullState = {
	id: null
};

const SessionReducer = (state = nullState, action) => {
	Object.freeze(state)
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			return {id: action.user.id}
		case LOGOUT_CURRENT_USER:
			return nullState
		default:
			return state;
	}

}

export default SessionReducer;