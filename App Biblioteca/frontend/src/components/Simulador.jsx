import React, {useState} from 'react'
//import Button from 'react-bootstrap/Button';
//import Cards from 'react-bootstrap/Cards';
//import { Link } from 'react-router-dom';
//import Axios from 'axios'
//import Swal from 'sweetalert2'


const Simulador = () => {
    
    const[valordelprestamo, setValordelprestamo]=useState("")
    const[cuotas, setCuotas]=useState("")
    const[tdi, setTdi]=useState("")
    

    const validar=(event)=>{
        

        //capturar el evento submit del formulario y evitar que la pagina se recargue
        event.preventDefault()
        console.log("pulsado el boton")
        //trim evalua si hay cadena de caracteres


        if (!valordelprestamo.trim()){
            console.log ("El valor del prestamo esta vacio, por favor ingresa la informacion solicitada")
            return
        }

        if (!cuotas.trim()){
            console.log ("La cantidad de cuotas esta vacia,por favor ingresa la informacion solicitada ")
            return
        }

        if (!tdi.trim()){
            console.log ("La tasa efectiva mensual esta vacia,por favor ingresa la informacion solicitada ")
            return
        }
        

        // eslint-disable-next-line
        const calcularcuota = () => {
              
            // se hace la formula considerando el siguiente link https://www.youtube.com/watch?v=N1-i1pXYXOE&t=161s
            //cuotaestimada= (valordelprestamo*(tdi/100))/1- ((1+(tdi/100)))^ (cuotas*-1)
            }

         //return cuotaestimada

    }        



    return (


        <div className="container">
            <header className='py-2 bg-primary text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className="fas fa-pencil-alt">Simulador de prestamos</i></h1>
                        </div>
                    </div>
                </div>
            </header>




            <form onSubmit={validar} className="form-groups">
                <input
                placeholder="Introduce el valor del prestamo"
                className="form-control mb-3"
                type="number"
                 //Recibe un evento que es le evento del input 
                //y dentro de esta funcion 
                //Se recoge en valor del input y lo setea dentro de la constante el estado
                //target una referencia al objeto en el cual se lanzo el evento. 
                onChange= {(e)=>{setValordelprestamo(e.target.value)}}
                />

                <input
                placeholder="Introduce la cantidad de cuotas"
                className="form-control mb-3"
                type="number"
                onChange= {(e)=>{setCuotas(e.target.value)}}
                />

                <input
                placeholder="Introduce la tasa de interes efectiva mensual"
                className="form-control mb-3"
                type="numner"
                onChange= {(e)=>{setTdi(e.target.value)}}
                />

                <button class="btn btn-primary btn-info btn-block " type="submit">Calcular</button>

            </form>

                

             {/* Card * guiarse de inicio sesion*/}

        </div>
    )
}

export default Simulador


