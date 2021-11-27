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
              <div className="col-text-center">    </div>
              <div className="row">
                  <div  className="col-4">
                  <br /> 
                  <br />
                  <br />
                    <div class="card">
                    {/* <img src="..." class="card-img-top" alt="https://files.consumerfinance.gov/f/images/credit_myths_graphic.original.png"/> */}
                    <div class="card-body">
                        <h5 class="card-title">Galerías de arte virtuales: características, imágenes y exposiciones de 20 galerías de arte online para ver desde casa</h5>
                        <p class="card-text">Refresca tu vena artística, mediante esta visitas podras disfrutar, analizar y relajarte, al tiempo que contemplas las obras de arte.  </p>
                        <a href="https://www.cinconoticias.com/galerias-de-arte-virtuales/" className="btn btn-primary btn-block">Quiero saber más</a>
                    </div>
                    </div>
                  <br />
                  </div>
                  <div  className="col-4">
                      <h2> Noticias principales </h2>
                  <br />
                  <div class="card">
                    {/* <img src="..." class="card-img-top" alt="https://files.consumerfinance.gov/f/images/credit_myths_graphic.original.png"/> */}
                    <div class="card-body">
                        <h5 class="card-title">El Nobel de Literatura más desconocido habla al fin: "Tardé doce años en publicar mi primera novela. Pensé en dejarlo"</h5>
                        <p class="card-text">El escritor tanzano mantiene cierta sensación de incredulidad sobre el galardón. “No sabía que era tan bueno”, bromea.</p>
                        <a href="https://www.elindependiente.com/tendencias/cultura/2021/11/06/el-nobel-de-literatura-mas-desconocido-habla-al-fin-tarde-doce-anos-en-publicar-mi-primera-novela-pense-en-dejarlo/" className="btn btn-primary btn-block">Quiero saber más</a>
                    </div>
                    </div>
                  </div>
                  <div  className="col-4">
                  <br /> 
                  <br />
                  <br />
                  <div class="card">
                    {/* <img src="img/loan.png" class="card-img-top"/> */}
                    <div class="card-body">
                        <h5 class="card-title">Sena tiene cupos para 2022: cómo inscribirse, fechas, cursos y horarios</h5>
                        <p class="card-text">Las inscripciones para los programas presenciales del Servicio Nacional de Aprendizaje están abiertas hasta el miércoles 24 de noviembre de 2021.</p>
                        <br />
                        <a href="https://www.pulzo.com/economia/inscripciones-sena-2022-como-inscribirse-fechas-horarios-cursos-PP1089882" className="btn btn-primary btn-block">Quiero saber más</a>
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
                </div>
                <article>
                    <br />
                    <h2>Contáctenos</h2>
                    <p>
                    Correo: <i>contacto@bibliotecacomunitaria.com</i>
                    <br />
                    Teléfono: <i>3012578684</i> 
                    <br />
                    Ubicacion: <i>Medellin</i> 
                    <br />
                    Horario: <i>De Lunes a Viernes - 8:00 am a 6:00 pm</i> <br /> 
                  </p>
                </article>
                </div>
            </div>

        </>
    )
}
