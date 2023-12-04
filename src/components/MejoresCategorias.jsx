
import PropTypes from "prop-types";
import "../estilos/MejoresCategorias.css";

function MejoresCategorias(props) {
  // const imagePath = `../assets/category-${props.imgcard}.jpg`;

  return (
    <div className="container-top">
      <div className="container-categories">
        <div className="card-category card-product">
          {/* modificas las props para que reciba la ruta completa */}
          <img className="imgcard" src={props.imgcard} alt="foto cafe" />
          <p>{props.nombreCafe}</p>
          <span>Ver más</span>
        </div>
      </div>
    </div>
  );
}

MejoresCategorias.propTypes = {
  imgcard: PropTypes.string.isRequired,
  nombreCafe: PropTypes.string.isRequired,
};

export default MejoresCategorias;
