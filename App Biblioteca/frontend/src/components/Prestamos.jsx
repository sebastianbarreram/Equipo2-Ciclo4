import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Prestamos() {
    const [libros, setLibros] = useState([])


    useEffect(() => {
        obtenerLibros()


    }, [])


    const obtenerLibros = async () => {
        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/book/listarLibroUsuario/' + id,
            {
                headers: { 'autorizacion': token }
            })
        console.log(respuesta.data)
        setLibros(respuesta.data)
    }


    const buscar = async (e) => {
        if (e.target.value === '') {
            return obtenerLibros()

        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get(`/book/listar/${buscar}/${sessionStorage.getItem('idusuario')}`, {
            headers: { 'autorizacion': token }

        })
        setLibros(respuesta.data)
    }


    const eliminar = async (id) => {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.delete('/book/eliminar/' + id, {
            headers: { 'autorizacion': token }
        })

        const mensaje = respuesta.data.mensaje

        Swal.fire({

            icon: 'error',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })

        obtenerLibros()



    }



    return (
        <div>

            <header className='py-2 bg-primary text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className="fas fa-pencil-alt">Libros</i></h1>
                        </div>
                    </div>
                </div>
            </header>


            <nav className="navbar py-4">
                <div className="container">

                    <div className="col-md-3">
                        <Link to="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addBook">
                            <i className='fas fa-plus'></i>
                            Add Libro

                        </Link>

                    </div>

                    <div className="col-md-6 ml-auto">
                        <div className="input-group">
                            <input className='form-control mr-sm-2' type="search" onChange={(e) => buscar(e)} placeholder='Buscar...' aria-label='Search' />

                        </div>

                    </div>
                </div>

            </nav>


            {/* mostrar libros */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Libros de {sessionStorage.getItem('nombre')}</h4>

                                </div>

                                <table className="table table-responsive-lg table-striped">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">NOMBRE</th>
                                            <th scope="col">AUTOR</th>
                                            <th scope="col">AÑO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            libros.map((libro, i) => (

                                                <tr key={libro._id}>
                                                    <td>{i + 1}</td>
                                                    <td>{libro.name}</td>
                                                    <td>{libro.author}</td>
                                                    <td>{libro.year}</td>

                                                    <td>
                                                        <Link className='btn btn-warning mr-1' to={'/editar/' + libro._id}>Editar</Link>
                                                        <button className='btn btn-danger mr-1' onClick={() => eliminar(libro._id)}>Eliminar</button>
                                                    </td>



                                                </tr>


                                            ))
                                        }

                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </section>




        </div>
    )
}
