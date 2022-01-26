import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.js'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);

export default Root;
