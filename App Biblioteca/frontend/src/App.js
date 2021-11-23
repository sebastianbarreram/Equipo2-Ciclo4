import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Prestamos from './components/Prestamos'
import Registro from './components/Registro';
import User from './components/User';
import Actualizar from "./components/Actualizar";
import Paginainicio from './components/Paginainicio';
import Simulador from './components/Simulador';


const estaAutenticado = () => {

  const token = sessionStorage.getItem('token')
  if (token) {

    return true

  }
  else {

    return false

  }
}
const MyRoute = (props) => {
  return estaAutenticado() ? <Route{...props} /> : <Redirect to='/' />


}

// const PublicRoute = (props) => {
//   return estaAutenticado() ? <Redirect to='/' /> : <Route{...props} />


// }





function App() {
  return (
    <Router>
      <Header />

      <MyRoute path='/' exact component={Paginainicio} />
      <Route path='/iniciosesion' exact component={Login} />
      <Route path='/simulador' exact component={Simulador} />
      <Route path='/registrar' exact component={Registro} />
      <Route path='/prestamos' exact component={Prestamos} />
      <Route path='/usuario' exact component={User} />
      <MyRoute path='/editar/:id' exact component={Actualizar} />


    </Router>
  );
}

export default App;
