import Header from "./Header"
import Banner from "./Banner"
import Caracteristica from "./Caracteristica"
import MejoresCategorias from "./MejoresCategorias";
import MejoresProductos from "./MejoresProductos";
import Gallery from "./Gallery"
import Footer from "./Footer"

const TiendaDeCafe = () => {
  return (
    <div className="TiendaDeCafe">
      <Header/>
      <Banner/>
      
      <section className="containter container-features">
    <Caracteristica
        icon="fa-plane-up"
        featurespan="Envíos gratis"
        featurep="En pedidos superiores a $50.000" 
    />
    <Caracteristica
          icon="fa-wallet"
          featurespan="Reembolso"
          featurep="100% garantía o devolución de dinero"
        />
        <Caracteristica
          icon="fa-gift"
          featurespan="Tarjetas de regalo"
          featurep="Regalos especiales con bonos"
        />
        <Caracteristica
          icon="fa-headset"
          featurespan="Servicio al cliente 24/7"
          featurep="WhatsApp +57 315 649 9883"
        />
    </section>

    <section className=''>
        <h1 className='heading-1'>Mejores categorias</h1>

        <div className='container-top-categories'>

        <MejoresCategorias
        nombreCafe= 'Café moca'
        imgcard='moca'
        />
              <MejoresCategorias
        nombreCafe= 'Expreso americano'
        imgcard='expreso'
        />
              <MejoresCategorias
        nombreCafe= 'Capuchino'
        imgcard='capuchino'
        />
        </div>
      </section>

      <section className="container top-products">
      <h1 className="heading-1">Mejores Productos</h1>
           <div className="container-options">
             <span className="active">Destacados</span>
             <span>Más recientes</span>
             <span>Mejor vendidos</span>
           </div>
           <div className='container-products'>

           <MejoresProductos
           imgTop="irish"
           discount="-13%"
           stars=""
           nameCoffe="Café Irish"
           price={"$18.270"}
           discountPrice={"$21.000"}
           />

        <MejoresProductos
           imgTop="ingles"
           discount="-22%"
           stars=""
           nameCoffe="Café Inglés"
           price={"$17.160"}
           discountPrice={"$22.000"}
           />

        <MejoresProductos
           imgTop="australiano"
           discount="-5%"
           stars=""
           nameCoffe="Café Australiano"
           price={"$16.625"}
           discountPrice={"$17.500"}
           />

        <MejoresProductos
           imgTop="helado"
           discount=""
           stars=""
           nameCoffe="Café Helado"
           price={"$21.200"}
           discountPrice=""
           />

           </div>   
      </section>

      <div>
      <Gallery/>
      </div>

      <div>
        <Footer/>
      </div>
    
    </div>
  );
};

export default TiendaDeCafe;