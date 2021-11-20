import React from 'react';
import {BrowserRouter as Router,Route} from  'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Prestamos from './components/Prestamos';
import Registro from './components/Registro';

function App() {
  return (
    <Router>
      <Header/>

      <Route path='/' exact component={Login}/>
      <Route path='/registrar' exact component={Registro}/>
      <Route path='/prestamos' exact component={Prestamos}/>

    </Router>
  );
}

export default App;
