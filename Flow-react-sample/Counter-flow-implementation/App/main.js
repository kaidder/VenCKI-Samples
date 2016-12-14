import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter/Counter.jsx'

import 'bootstrap/dist/css/bootstrap.css';

const render = () => {

    ReactDOM.render(
        <Counter offset={4} eventCallback = {(num: number, eventTime: Date) => console.log(`At ${eventTime.toString()} Counter Value is ${num} `)} />
        , document.getElementById('reactApp'));

};

render();
