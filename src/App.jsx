import { useEffect, useState } from "react"
import AuthContext from "./context/AuthContext";
import Login from "./components/Login"
import TiendaDeCafe from "./components/TiendaDeCafe";
import "./App.css"



const App = () => {
  const [step, setStep] = useState ("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setStep("Tienda");
  };

  useEffect(() => {
    console.log("Tienda", step);
  }, [step]);

  return (
    <AuthContext.Provider value={{ step, setStep, isLoggedIn, handleLogin }}>
      <div>
        {/* Aplica las clases CSS dependiendo del paso actual */}
        <div className={`fade-in-out ${step !== "Login" ? "fade-out" : ""}`}>
          {step === "Login" && <Login handleLogin={handleLogin} />}
        </div>
        <div className={`fade-in-out ${step !== "Tienda" ? "fade-out" : ""}`}>
          {step === "Tienda" && <TiendaDeCafe />}
        </div>
      </div>

    </AuthContext.Provider>
  );
};

export default App;