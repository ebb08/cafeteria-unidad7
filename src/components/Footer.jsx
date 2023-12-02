
import "../estilos/Footer.css"
import payment from "../assets/payment.png";

function Footer() {
  return ( 
    <footer className="footer">
    <div className="container container-footer">
      <div className="menu-footer">
        <div className="contact-info">
          <p className="title-footer">Info del contacto</p>
          <ul>
            <li>Dirección: Calle 38 32a 42</li>
            <li>Teléfono. 3156499883</li>
            <li>Fax:55555300</li>
            <li>Email: cafebar@soporte.com</li>
          </ul>
          <div className="social-icons">
            <span className="facebook"><i className="fa-brands fa-facebook"></i></span>
            <span className="twitter"><i className="fa-brands fa-twitter"></i></span>
            <span className="youtube"><i className="fa-brands fa-youtube"></i></span>
            <span className="pinterest"><i className="fa-brands fa-pinterest"></i></span>
            <span className="instagram"><i className="fa-brands fa-instagram"></i></span>
          </div>
        </div>
        <div className="information">
          <p className="title-footer">Información</p>
          <ul>
            <li><a href="/">Acerca de Nosotros</a></li>
            <li><a href="/">Información Delivery</a></li>
            <li><a href="/">Politicas de privacidad</a></li>
            <li><a href="/">Terminos y condiciones</a></li>
            <li><a href="/">Contactános</a></li>
          </ul>
        </div>
        <div className="my-account">
          <p className="title-footer">Mi cuenta</p>
          <ul>
            <li><a href="/">Mi cuenta</a></li>
            <li><a href="/">Historia de ordenes</a></li>
            <li><a href="/">Lista de deseos</a></li>
            <li><a href="/">Boletín</a></li>
            <li><a href="/">Reembolsos</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <p className="title-footer">Boletin Informativo</p>
  
          <div className="content">
            <p> suscribete a nuestros boletines ahora y mantente al día con nuevas colecciones y ofertas exlusivas.</p>
            <input type="email" placeholder="Ingresa correo aquí..."></input>
            <button>Suscribirme</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p> Se reservan derechos de autor &copy; 2023</p>
        <img src={payment} alt="payment"/>    
        </div>
    </div>

  </footer>
   );
}

export default Footer;