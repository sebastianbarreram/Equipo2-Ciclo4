import React from 'react'
import imagen1 from './img/libros.jpg';
import imagen2 from './img/banner.jpg';

export default function Paginainicio() {
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100 imagen-custom" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100 imagen-custom" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <div className="container-fluid p-5 bg-dark text-white imagen-custom active text-center">
                            <h1>Tablero de anuncios</h1>
                            <p>
                                Horario de atención al público:<br />
                                Lunes a viernes<br />
                                8:00 am - 6:00 pm<br /><br />
                                Curso de ajedrez:<br />
                                Martes - Jueves<br />
                                4:30 pm - 6:00 pm
                            </p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}
