import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    window.login = login;
    ReactDOM.render(<h1>Welcome to Strava</h1>, root);
})