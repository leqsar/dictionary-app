import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.js'
import ResultPage from './components/ResultPage.js'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result-page" element={<ResultPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default Root;
