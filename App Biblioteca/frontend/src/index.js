import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Axios from 'axios';

<<<<<<< HEAD
// Axios.defaults.baseURL='http://localhost:4000'

Axios.defaults.baseURL='https://backendequipo2p22.herokuapp.com/'

=======

Axios.defaults.baseURL='http://localhost:4000'
>>>>>>> 235627c7b9cf02e265673a256ddb1ec726e3a1a6

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


