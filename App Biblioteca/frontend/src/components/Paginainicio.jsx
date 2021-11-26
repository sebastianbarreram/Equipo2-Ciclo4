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

            <div>
              <container>
              <div className="row"/>
              <div className="col-text-center">    </div>
              <div className="col-text-center"><h3>Noticias</h3></div>
              <div className="col-text-center">    </div>
              <div className="row">
                  <div  className="col-4">
                    <div class="card">
                    <img src="..." class="card-img-top" alt="https://files.consumerfinance.gov/f/images/credit_myths_graphic.original.png"/>
                    <div class="card-body">
                        <h5 class="card-title">Titular noticia 1</h5>
                        <p class="card-text">Resumen noticia uno</p>
                        <a href="#" className="btn btn-primary btn-block">Go somewhere</a>
                    </div>
                    </div>
                  </div>
                  <div  className="col-4">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="https://files.consumerfinance.gov/f/images/credit_myths_graphic.original.png"/>
                    <div class="card-body">
                        <h5 class="card-title">Titular noticia 2</h5>
                        <p class="card-text">Resumen noticia 2</p>
                        <a href="#" className="btn btn-primary btn-block">Go somewhere</a>
                    </div>
                    </div>
                  </div>
                  <div  className="col-4">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="https://files.consumerfinance.gov/f/images/credit_myths_graphic.original.png"/>
                    <div class="card-body">
                        <h5 class="card-title">Titular noticia 3</h5>
                        <p class="card-text">Resumen noticia 3</p>
                        <a href="#" className="btn btn-primary btn-block">Go somewhere</a>
                    </div>
                    </div>
                  </div>
              </div>
              </container>
            </div>


            {/* pie de pagina */}
            <div>
                <div class="seccion-pie">
                <div class="logo-container">
                    <a href="">
                    <img
                        class="center"
                        src="./img/logobiblioteca.png"
                        alt="Logo Bibilioteca Comunitaria"
                    />
                    </a>
                </div>
                <article>
                    <br />
                    <h2>Contáctenos</h2>
                    <p>
                    Sebastian Barrera : <i>sbarrera.96@hotmail.com</i>
                    <br />
                    Carolina Cova :
                    <i>caromargui@gmail.com</i> <br />
                    Sebastian Rentería :
                    <i>sren97@gmail.com </i> <br />
                    Diego Guisao :
                    <i>diego.alexander.guisao@gmail.com </i> <br />
                    Santiago Puello :
                    <i>sepuellov@unal.edu.co </i> <br />
                    </p>
                </article>
                </div>
            </div>

        </>
    )
}
