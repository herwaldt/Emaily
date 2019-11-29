import 'materialize-css/dist/css/materialize.min.css';
import './components/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    //Provider tag is a built in Component that knows when something changes in the store --
    // and Notifies <App> which rerenders all child components 
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);

//Redux side of application