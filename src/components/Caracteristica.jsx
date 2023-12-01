import PropTypes from 'prop-types';
import "../estilos/Caracteristicas.css";

function Caracteristica(props) {
  return (
    <div className="card-feature">
      <i className={`fa-solid ${props.icon}`}></i>
      <div className="feature-content">
        <span className="featurespan">{props.featurespan}</span>
        <p className="featurep">{props.featurep}</p>
      </div>
    </div>
  );
}

Caracteristica.propTypes = {
  icon: PropTypes.string.isRequired,
  featurespan: PropTypes.string.isRequired,
  featurep: PropTypes.string.isRequired,
};

export default Caracteristica;
