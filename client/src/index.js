import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'


// Import component
import App from './App';
import Context from './includes/context/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Context>
        <App />
      </Context>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();