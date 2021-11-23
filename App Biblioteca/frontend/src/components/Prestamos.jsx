import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Prestamos() {
    const [libros, setLibros] = useState([])

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState('')


    const [administrador, setAdmininistrador] = useState(false)




    useEffect(() => {
        obtenerLibros()

        if (sessionStorage.getItem('administrador') === 'true') {
            setAdmininistrador(true)
        }





    }, [])


    const obtenerLibros = async () => {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/book/listarLibros',
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
        const respuesta = await Axios.get(`/book/buscar/${buscar}`, {
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


    const guardar = async (e) => {
        e.preventDefault()
        const libro = {
            name,
            year,
            author,
        }

        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.post('/book/crear', libro, {
            headers: { 'autorizacion': token }
        })
        // console.log("prueba")

        const mensaje = respuesta.data.mensaje

        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout(() => {
            window.location.href = '/prestamos'

        }, 1500)


    }



    return (

        <div>

            {
                administrador ?
                    <div>
                        <header className='py-2'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Libros Administrador</h1>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <p>
                            En esta sección puedes editar la base de datos de libros
                            disponible para que el usuario registrado pueda realizar
                            el préstamo del material bibliográfico disponible
                        </p>


                        <nav className="navbar py-4">
                            <div className="container">

                                <div className="col-md-3">
                                    <Link to="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addBook">
                                        <i className='fas fa-plus'></i>
                                        AGREGAR LIBRO

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
                                                <h4>Libros</h4>

                                            </div>

                                            <table className="table table-responsive-lg table-striped">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Nombre</th>
                                                        <th scope="col">Autor</th>
                                                        <th scope="col">Año</th>
                                                        <th scope="col">Disponible</th>
                                                        <th scope="col">Opciones</th>

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
                                                                {
                                                                    libro.available ?
                                                                        <td>Si</td>
                                                                        :
                                                                        <td>No</td>
                                                                }

                                                                <td>
                                                                    <Link className='btn btn-warning mr-1' to={'/editar/' + libro._id} >EDITAR</Link>
                                                                    <button className='btn btn-danger mr-1' onClick={() => eliminar(libro._id)}>ELIMINAR</button>
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



                        <div className="modal fade" id='addBook'>
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header bg-primary text-white">
                                        <h5 className='modal-title'>Agregar libro</h5>
                                        <button className='close' data-dismiss='modal'>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={guardar}>
                                            <div className="form-group">
                                                <label >Nombre</label>
                                                <input type="text" className='form-control required' onChange={(e) => setName(e.target.value)} />
                                            </div>

                                            <div className="form-group">
                                                <label >Año</label>
                                                <input type="text" className='form-control required' onChange={(e) => setYear(e.target.value)} />
                                            </div>

                                            <div className="form-group">
                                                <label >Autor</label>
                                                <input type="text" className='form-control required' onChange={(e) => setAuthor(e.target.value)} />
                                            </div>

                                            <div className="form-group">
                                                <button className='btn btn-primary' type='submit'>GUARDAR</button>

                                            </div>


                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>
                    :



                    <div>
                        <header className='py-2'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>¡Busca tu libro preferido!</h1>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <p>
                            Si te apasiona el maravilloso mundo de la lectura estás en el lugar
                            indicado, en esta sección encontrarás una gran variedad
                            de generos literarios, asi que busca tu libro preferido, préstalo y
                            a leer...
                        </p>

                        <nav className="navbar py-4">
                            <div className="container">
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
                                                <h4>Libros</h4>

                                            </div>

                                            <table className="table table-responsive-lg table-striped">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Nombre</th>
                                                        <th scope="col">Autor</th>
                                                        <th scope="col">Año</th>
                                                        <th scope="col">Disponible</th>
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

                                                                {
                                                                    libro.available ?
                                                                        <td>Si</td>
                                                                        :
                                                                        <td>No</td>
                                                                }


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
            }

        </div>

    )
}
