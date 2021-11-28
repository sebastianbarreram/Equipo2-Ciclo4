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
import Contactenos from './components/Contactenos';
import Cursos from './components/Cursos';
import Footer from './components/Footer';


const estaAutenticado = () => {

  const token = sessionStorage.getItem('token')
  if (token) {
    console.log("en el if")
    return true

  }
  else {
    console.log("en else")
    return false

  }
}
// const MyRoute = (props) => {
//   return estaAutenticado() ? <Route{...props} /> : <Redirect to='/iniciosesion'/>


// }

// const PublicRoute = (props) => {
//   return estaAutenticado() ? <Redirect to='/' /> : <Route{...props} />


// }





function App() {
  return (
    <Router>
      <Header />

      <Route path='/' exact component={Paginainicio} />
      <Route path='/iniciosesion' exact component={Login} />
      <Route path='/simulador' exact component={Simulador} />
      <Route path='/registrar' exact component={Registro} />
      <Route path='/prestamos' exact render={() => (
        estaAutenticado() ? <Prestamos /> : <Redirect to="/iniciosesion" />)} />
      <Route path='/usuario' exact component={User} />
<<<<<<< HEAD
      <Route path='/editar/:id' exact component={Actualizar} />

=======
      <Route path='/contactenos' exact component={Contactenos} />
      <Route path='/cursos' exact component={Cursos} />
      <MyRoute path='/editar/:id' exact component={Actualizar} />
      
      <br/>
      <br/>
      <br/>
      
      <Footer/>
>>>>>>> 235627c7b9cf02e265673a256ddb1ec726e3a1a6

    </Router>
    
  );
}

export default App;
