import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {MessageListReducer} from './Components/RedditList/messageListReducer.js';
import {MessageListContainer} from './Components/RedditList/MessageListContainer.jsx'

import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(MessageListReducer, applyMiddleware(thunkMiddleware));

const render = () => {

    ReactDOM.render(
        <Provider store={store}>
            <MessageListContainer />
        </Provider>
        , document.getElementById('reactApp'));

};

render();
