
import "../estilos/Header.css"

function Header() {
  return ( 
    <header className="header">
    <div className="container-hero">
      <div className="container hero">
        
        <div className="customer-support"> 
          <i className="fa-solid fa-headset"></i>
          <div className="content-customer-support">
            <span className="text">Soporte al cliente</span>
            <span className="number">+ 57 315 649 9883</span>
          </div>
        </div>

        <div className="container-logo">
          <i className="fa-solid fa-mug-hot"></i>
          <h1 className="logo"><a href="/">CafeBar</a> </h1>
        </div>

        <div className="container-user">
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>

          <div className="content-shopping-cart">
            <span className="text">Carrito de compras</span>
            <span className="number">(0)</span>
          </div>
        </div>
      </div>
    </div>

    <div className="container-navbar">
      <nav className="navbar container">
        <i className="fa-solid fa-bars"></i>
        <ul className="menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Moca</a></li>
          <li><a href="/">Expreso</a></li>
          <li><a href="/">Capuchino</a></li>
          <li><a href="/">Más</a></li>
        </ul>
        <form className="search-form">
          <input type="search" placeholder="Buscar..."></input>
          <button className="btn-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </nav>
    </div>
  </header>
   );
}

export default Header;