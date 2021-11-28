import React from 'react'

function Footer() {
    return (
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <nav className="row">
                        <a href="#" className="col-4 text-reset text-uppercase d-flex aling-items-center">
                            <img src="./img/logobiblioteca.png" alt=""/>Biblioteca Comunitaria</a>

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
                            <a href="#" className="text-reset"><i class="fab fa-facebook-square"></i>Facebook</a>

                            <a href="#" className="text-reset"><i class="fab fa-twitter"></i>Twitter</a>

                            <a href="#" className="text-reset"><i class="fab fa-instagram"></i>Instagram</a>

                            <a href="#" className="text-reset"><i class="fab fa-whatsapp"></i>WhatsApp</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </footer>

               
    )
}
export default Footer;
