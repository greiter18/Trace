import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/event_actions';

const nullState = Object.freeze({
	id: null
});

const SessionReducer = (state = nullState, action) => {
	Object.freeze;
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			return {id: action.currentUser.id}
		case LOGOUT_CURRENT_USER:
			return nullState
		default:
			return state;
	}

}

export default SessionReducer;