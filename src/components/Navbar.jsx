import { useState } from "react"
import { useNavigate } from "react-router-dom"
import cartIcon from "../assets/icons/carrito-de-compras.png"
import bellIcon from "../assets/icons/notificacion.png"
import userIcon from "../assets/icons/usuario.png"
import menuIcon from "../assets/icons/menu.png"
import logo from "../assets/images/logo.png"
import name from "../assets/images/nombre.png"
import searchIcon from "../assets/icons/lupa.png"
import { COLORS } from "../config/theme"

function Navbar({toggleSidebar} ) {

  const navigate = useNavigate()
  const openNotifications = () => alert("Abrir notificaciones")

  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: COLORS.pastel
      }}>

        {/* IZQUIERDA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={toggleSidebar} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={menuIcon} alt="menu" width="25" />
          </button>

          <button onClick={() => navigate("/")} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={logo} alt="logo" width="80" />
          </button>

          <button onClick={() => navigate("/")} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={name} alt="nombre" width="100" />
          </button>
        </div>

        {/* CENTRO → input búsqueda */}
        <div style={{ position: "relative" }}>
          <input 
            type="text" 
            placeholder="Buscar..." 
            style={{ 
              padding: "8px 8px 8px 45px",
              background: COLORS.blanco, 
              border: `1px solid ${COLORS.cafe_primario}`, 
              borderRadius: "8px",
              color: COLORS.cafe_primario
            }}
          />
          <img 
            src={searchIcon} 
            alt="buscar"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "20px",
              color: COLORS.cafe_primario
            }}
          />
        </div>

        {/* DERECHA */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button onClick={() => navigate("/carrito")} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={cartIcon} alt="carrito" width="25" />
          </button>

          <button onClick={openNotifications} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={bellIcon} alt="notificaciones" width="25" />
          </button>

          <button onClick={() => navigate("/Login")} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={userIcon} alt="perfil" width="25" />
            
          </button>
        </div>
      </div>


    </>
  )
}

export default Navbar
