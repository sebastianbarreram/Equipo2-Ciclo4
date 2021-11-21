import React from 'react';
import {BrowserRouter as Router,Route} from  'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Prestamos from './components/Prestamos';
import Registro from './components/Registro';
import User from './components/User';
import Actualizar from "./components/Actualizar";
import { PaginaInicio } from './components/PaginaInicio';






function App() {
  return (
    <Router>
      <Header/>

      <Route path='/' exact component={PaginaInicio}/>
      <Route path='/iniciosesion' exact component={Login}/>
      <Route path='/registrar' exact component={Registro}/>
      <Route path='/prestamos' exact component={Prestamos}/>
      <Route path='/usuario' exact component={User}/>
      <Route path='/editar' exact component={Actualizar}/>


    </Router>
  );
}

export default App;
