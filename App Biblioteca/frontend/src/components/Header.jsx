import React from 'react'
import { Link } from 'react-router-dom';
import logo from './img/logobiblioteca.png';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                <div className="container-fluid">
                    <Link className="navbar-brand col-3" to="/">
                        <div>
                            <img
                                src={logo}
                                width="116"
                                alt=""
                                class="d-inline-block align-text-center"
                            />
                        </div>
                    </Link>
                    <h1>Biblioteca Comunitaria</h1>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li>
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/">Contáctenos</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/">Cursos</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/">Simulador</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/">Préstamos</Link>
                            </li>
                            <li className="nav-item dropdown" v-if="var1 == true">
                                <div
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <strong>

                                    </strong>
                                    <v-icon>mdi-account</v-icon>
                                </div>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <li>

                                    </li>
                                </div>
                            </li>
                            <li v-else>
                                <Link className="nav-link" to="/login">Iniciar sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </>
    )

}


