import React from 'react'
import imagen1 from './img/libros.jpg';
import imagen2 from './img/banner.jpg';

export const PaginaInicio = () => {
    return (
        <>
            {/* <!-- Carousel Bootstrap --> */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="0"
                        className="active"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="2"
                    ></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block imagen-custom" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block imagen-custom" alt=""  />
                    </div>
                    <div className="carousel-item">
                        <div
                            className="container-fluid p-5 bg-dark text-white imagen-custom2">
                            <h1>Tablero de anuncios</h1>
                            <p>
                                En este párrafo se puede agregar cualquier información relevante
                                para la biblioteca.<br />
                                Puede contener información de actividades próximas a realizar e
                                información de interés general para la comunidad a la que esté
                                dirigida la página.<br />
                                Con esto se comprueba que podemos agregar cualquier tipo de
                                elementos en el slider.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}
