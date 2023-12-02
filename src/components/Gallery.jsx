import "../estilos/Gallery.css"

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

function Gallery() {
  return ( 
    <section className="gallery">
    <img src={gallery1} alt="Gallery Img1" className="gallery-img-1"/>

    <img src={gallery2} alt="Gallery Img2" className="gallery-img-2"/>

    <img src={gallery3} alt="Gallery Img3" className="gallery-img-3"/>

    <img src={gallery4} alt="Gallery Img4" className="gallery-img-4"/>
    
    <img src={gallery5} alt="Gallery Img5" className="gallery-img-5"/>
   </section>
   );
}

export default Gallery;