import React from 'react'

function Footer() {
    return (
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <nav className="row">
                        <a href="#" className="col-3 text-reset text-uppercase d-flex aling-items-center">
                            <img src="./img/logobiblioteca.png" alt="" className="img-logo mr-2"/>Biblioteca Comunitaria</a>

                        <ul className="col-4 list-unstyled">
                            <li className="font-weight-bold text-uppercase">Contáctenos</li>
                            <li>Correo: contacto@bibliotecacomunitaria.com</li>
                            <li>Teléfono: 3012578684</li>
                            <li>Ubicación Medellín</li>
                            <li>Horario: Lunes a viernes - 08:00 am a 06:00 pm</li>
                        </ul>

                        <ul className="col-4 list-unstyled">
                            <li className="font-weight-bold text-uppercase">Siguenos en nuestras redes</li>
                            <li className="d-flex justify-content-between">
                                
                            <a href="https://www.facebook.com" className="text-reset"><i class="fab fa-facebook-square"></i>Facebook</a>
                            
                            <a href="https://www.twitter.com" className="text-reset"><i class="fab fa-twitter"></i>Twitter</a>

                            <a href="https://www.instagram.com" className="text-reset"><i class="fab fa-instagram"></i>Instagram</a>

                            <a href="https://www.whatsapp.com" className="text-reset"><i class="fab fa-whatsapp"></i>WhatsApp</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </footer>
               
    )
}
export default Footer;
