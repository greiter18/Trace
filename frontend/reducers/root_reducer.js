import SessionsReduer from './session_reducer';
import { combineReducers } from 'redux';

/*
Export a `RootReducer` that sets up an `events` slice of state, which delegates
to the `EventsReducer`.
*/

const RootReducer = combineReducers({
    events: SessionsReduer
}
)

export default RootReducer;