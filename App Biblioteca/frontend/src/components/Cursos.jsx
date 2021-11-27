import React from 'react'

export default function Cursos() {
    return (
        <>
            <div className= "container">
                <h1>Cursos</h1>
                <div className="card" style="width: 18rem;">
                    <img src=".img/excel.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Curso Excel</h5>
                        <p className="card-text">Aprende excel de un nivel básico a avanzado.</p>
                        <a href="#" className="btn btn-primary">Ir a curso</a>
                    </div>

                    <br />

                    <img src=".img/edufinanciera.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Educación financiera personal</h5>
                        <p className="card-text">Aprende a llevar control de tus ingresos y gastos.</p>
                        <a href="#" className="btn btn-primary">Ir a curso</a>
                    </div>

                </div>
            </div>            
        </>
    )
}
