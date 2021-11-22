import React from 'react'


export default function Simulador2() {
    //const [valordelprestamo, setValordelprestamo] = useState([])
    //const [tdinteres, setTdinteres] = useState('')
    //const [meses, setMeses] = useState('')

    //const calcularprestamo =  => {
     //event.preventDefault ();
     //calcularprestamo()
    //}
    //const calcularprestamo = (cantidad:number, meses:number, tasa:number) => {
        //var prestamo = ((cantidad*tasa)/meses)
        //console.log(prestamo)
    //} 
    return (
        <div className="credit-caluclator-contianer">
            <h1>Simulador de creditos</h1>

            <form>
            <div className= "form-item">
                <label>Valor del prestamo</label>
                <div clasName="form-input">
                    <input
                        type="number"
                        name= "valordelprestamo"
                        placeholder="0"
                    />        
                </div>
            </div>
            <div className= "form-item">
                <label>Tasa de interes mensual</label>
                <div clasName="form-input">
                    <input
                        type="number"
                        name= "tdinteres "
                        placeholder="0"
                    />        
                </div>
            </div>  
            <div className= "form-item">
                <label>Numero de meses</label>
                <div clasName="form-input">
                    <input
                        type="number"
                        name= "meses "
                        placeholder="0"
                    />        
                </div>
            </div>  
            <div className="form-action">
               <input
                    type="submit"
                    value="Calcular"
                    clasName='calculate-button'
                />
            </div>   
            </form>
        </div>
    )
}
