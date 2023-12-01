import PropTypes from 'prop-types';
import "../estilos/MejoresCategorias.css";


function MejoresCategorias(props) {
  const imagePath = `src/assets/imagenes/category-${props.imgcard}.jpg`;

  return (
    <div className="container-top">
      <div className='container-categories'>
        <div className='card-category card-product'>
          <img className="imgcard" src={imagePath} alt="foto cafe" />
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