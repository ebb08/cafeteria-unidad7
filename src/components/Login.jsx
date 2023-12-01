import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useState } from "react"
import "../estilos/Login.css"


const Login = () => {

  const { setStep }= useContext(AuthContext);

  const[nombre, setNombre] = useState("")
  const[contraseña, setContraseña] = useState("")
  const[error, setError] = useState(false)


  const handleSubmit =(e) => {
    e.preventDefault();

    // console.log("Nombre:", nombre);
    // console.log("Contraseña:", contraseña);

    // if(nombre === "" || contraseña === "") {
    //   setError(true);
    //   return;
    // }

    if (nombre.trim() === "" || contraseña.trim() === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (contraseña.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setError(false);
    setStep("Tienda");
  };

  
  return (
    <section className="logcontent">
    <h1 className="textlogin">Login</h1>
    <div className="container-logo-login">
          <i className="fa-solid fa-mug-hot"></i>
          <h1 className="logo"><a href="/">CafeBar</a> </h1>
        </div>
    <form className="formulario"
    onSubmit={handleSubmit}
    >
    <input 
    type="text"
    value={nombre}
    onChange={e => setNombre(e.target.value)}
    />
    <input 
    type="password"
    value={contraseña}
    onChange={e => setContraseña(e.target.value)}
    />
    <button onClick={handleSubmit}>Iniciar sesión</button>
    </form>

    <div className="mnserror">  {error && <p>{error}</p>}
    </div>
  
  </section>

  )
}

export default Login