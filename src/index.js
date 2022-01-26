import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import storeConfig from'./store'
import {fetchWord} from './actions.js'

const store = storeConfig();

render(<Root store={store} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
