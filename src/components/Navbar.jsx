import { useState } from "react"
import Sidebar from "./Sidebar"
import { APP_NAME } from "../config/constants"

function Navbar() {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#f5e6d3"
      }}>

        {/* IZQUIERDA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          
          {/* Botón hamburguesa */}
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>

          {/* Logo */}
          <img 
            src="https://via.placeholder.com/40" 
            alt="logo" 
          />

          <h3 style={ {color:"#2D1E0E"}}>{APP_NAME}</h3>
        </div>

        {/* CENTRO */}
        <input 
          type="text" 
          placeholder="Buscar..." 
          style={{ width: "40%", padding: "5px", background: "#ffffff" }}
        />

        {/* DERECHA */}
        <div style={{ display: "flex", gap: "15px" }}>
          <span>🛒</span>
          <span>🔔</span>
          <span>👤</span>
        </div>

      </div>

      {/* Sidebar */}
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={open} />
      </div>
    </>
  )
}

export default Navbar