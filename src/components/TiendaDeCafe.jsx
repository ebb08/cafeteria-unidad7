import Header from "./Header"
import Banner from "./Banner"
import Caracteristica from "./Caracteristica"
import MejoresCategorias from "./MejoresCategorias";
import MejoresProductos from "./MejoresProductos";
import Gallery from "./Gallery"
import Footer from "./Footer"

//importar la ruta de la imagen
// import cafeAustraliano from "../assets/cafe-australiano.jpg";
// import cafeHelado from "../assets/cafe-helado.jpg";
// import cafeIngles from "../assets/cafe-ingles.jpg";
// import cafeIrish from "../assets/cafe-irish.jpg";
import categoryCapuchino from "../assets/category-capuchino.jpg";
import categoryExpreso from "../assets/category-expreso.jpg";
import categoryMoca from "../assets/category-moca.jpg";
import { useState } from "react";
import { useEffect } from "react";

const TiendaDeCafe = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
    
    fetch("https://api.sampleapis.com/coffee/iced")
    .then((info)=> info.json())
    .then((finalInfo)=> setData(finalInfo))

    },[])

    const imp = () =>{
      console.log(data);
    }

    imp();

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

          {/* agregas la variable con la ruta de la imagen */}
          <MejoresCategorias nombreCafe="Café moca" imgcard={categoryMoca} />
          <MejoresCategorias
            nombreCafe="Expreso americano"
            imgcard={categoryExpreso}
          />
          <MejoresCategorias
            nombreCafe="Capuchino"
            imgcard={categoryCapuchino}
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

          {/* igualmente en mejoresProductos */}
          {data.map((information, index)=>
          <MejoresProductos
          key={index}
          data={information}
          imgTop={information.image}
          nameCoffe={information.title}
          desc={information.description}
        />
          )}

          {/* <MejoresProductos
            imgTop={cafeIngles}
            discount="-22%"
            stars=""
            nameCoffe="Café Inglés"
            price={"$17.160"}
            discountPrice={"$22.000"}
          />
          <MejoresProductos
            imgTop={cafeAustraliano}
            discount="-5%"
            stars=""
            nameCoffe="Café Australiano"
            price={"$16.625"}
            discountPrice={"$17.500"}
          />
          <MejoresProductos
            imgTop={cafeHelado}
            discount=""
            stars=""
            nameCoffe="Café Helado"
            price={"$21.200"}
            discountPrice=""
          /> */}

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