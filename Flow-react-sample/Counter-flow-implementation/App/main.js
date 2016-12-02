import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter/Counter.jsx'

import 'bootstrap/dist/css/bootstrap.css';

const render = () => {

    ReactDOM.render(
        <Counter offset={4} />
        , document.getElementById('reactApp'));

};

render();
