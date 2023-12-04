
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useState } from "react";
import "../estilos/Login.css";

const Login = () => {
  const { setStep } = useContext(AuthContext);
  const [nombre, setNombre] = useState(localStorage.getItem("nombre") || "");
  const [contraseña, setContraseña] = useState(
    localStorage.getItem("contraseña") || ""
  );
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || contraseña.trim() === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (contraseña.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setError(false);
    // Guardar en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("contraseña", contraseña);
    setStep("Tienda");
  };

  useEffect(() => {
    // Verificar si hay datos guardados en localStorage al cargar el componente
    const storedNombre = localStorage.getItem("nombre");
    const storedContraseña = localStorage.getItem("contraseña");
    if (storedNombre && storedContraseña) {
      setNombre(storedNombre);
      setContraseña(storedContraseña);
    }
  }, []);

  return (
    <section className="logcontent">
      <h1 className="textlogin">Login</h1>
      <div className="container-logo-login">
        <i className="fa-solid fa-mug-hot"></i>
        <h1 className="logo">
          <a href="/">CafeBar</a>{" "}
        </h1>
      </div>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <div className="mnserror">{error && <p>{error}</p>}</div>
    </section>
  );
};

export default Login;
