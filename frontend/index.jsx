import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login, signup, logout} from './util/session_api_util.js'
// import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    ReactDOM.render(<h1>Welcome to Strava</h1>, root);
})