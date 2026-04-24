import { useState } from "react"
import InputField from "../components/InputField"
import Button from "../components/Button"
import GoogleButton from "../components/GoogleButton"
import { FaUserPlus, FaLock } from "react-icons/fa"
import logo from "../assets/images/logo_nombre_vertical.png"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      {/* ESTILOS */}
      <style>
        {`
        .login-container {
          display: flex;
          height: 100vh;
          background: #efefef;
          font-family: Arial, sans-serif;
        }

        .login-left, .login-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px;
        }

        .login-left {
          background: #f8f8f8;
        }

        .logo {
          width: 100%;
          max-width: 900px;
          height: auto;
          object-fit: contain;
        }

        .divider {
          width: 2px;
          background: #ccc;
          margin: 40px 0;
        }

        .login-right {
          background: white;
          box-shadow: -5px 0 15px rgba(0,0,0,0.05);
        }

        .subtitle {
          width: 280px;
          text-align: center;
          margin-bottom: 20px;
          color: #555;
        }

        .link-text {
          margin-top: 10px;
          font-size: 14px;
        }

        a {
          color: #007bff;
          text-decoration: none;
          font-size: 14px;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .login-container {
            flex-direction: column;
          }

          .divider {
            display: none;
          }

          .login-left {
            display: none;
          }

          .login-right {
            width: 100%;
            height: 100%;
          }
        }
        `}
      </style>

      {/* CONTENIDO */}
      <div className="login-container">

        {/* IZQUIERDA */}
        <div className="login-left">
          <img src={logo} alt="logo" className="logo"/>
        </div>

        {/* DIVISOR */}
        <div className="divider"></div>

        {/* DERECHA */}
        <div className="login-right">

          <p className="subtitle">
            Inicia sesión para comprar, vender y tener una mejor experiencia
          </p>

          <InputField
            type="text"
            placeholder="Correo o teléfono"
            icon={<FaUserPlus />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Contraseña"
            icon={<FaLock />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button 
            text="Iniciar Sesión"
            onClick={() => console.log(email, password)}
          />

          <Button 
            text="Iniciar Sesión admin"
            onClick={() => console.log("admin")}
          />

          <p className="link-text">¿Olvidaste tu contraseña?</p>
          <a href="#">Recupérala aquí</a>

          <GoogleButton onClick={() => console.log("Google login")} />

          <p className="link-text">¿Aún no tienes cuenta?</p>
          <a href="#">Regístrate aquí</a>

        </div>
      </div>
    </>
  )
}

export default Login