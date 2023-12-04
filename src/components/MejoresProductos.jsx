
import PropTypes from "prop-types";
import "../estilos/MejoresProductos.css";
function MejoresProductos(props) {
  // const rutaImagen = `src/assets/imagenes/cafe-${props.imgTop}.jpg`;

  return (
    <div className="">
      <div className="card-top-product">
        <div className="container-img">
          {/* modificas las props para que se envie la ruta completa */}
          <img className="imgTop" src={props.imgTop} alt="foto cafe" />
          <span className="discount">{props.discount}</span>
          <div className="button-group">
            <span>
              {" "}
              <i className="fa-solid fa-eye"></i>
            </span>
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
            <span>
              <i className="fa-solid fa-code-compare"></i>
            </span>
          </div>
        </div>
        <div className="content-card-product">
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <h3 className="nameCoffe">{props.nameCoffe}</h3>
          <span className="add-cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <p className="price">
            {props.price}{" "}
            <span className="discountPrice">{props.discountPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

MejoresProductos.propTypes = {
  imgTop: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  nameCoffe: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discountPrice: PropTypes.string.isRequired,
};

export default MejoresProductos;