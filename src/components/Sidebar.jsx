import { Link } from "react-router-dom"
import cartIcon from "../assets/icons/carrito-de-compras.png"
import catalogIcon from "../assets/icons/catalogo.png"
import contactIcon from "../assets/icons/contacto.png"
import loginIcon from "../assets/icons/usuario.png"
import { COLORS } from "../config/theme"

function Sidebar({ isOpen }){
    return(
        <aside
            style={{
                width: isOpen ? "200px" : "0px",
                transition: "0.3s",
                overflow: "hidden",
                background: "#f5e6d3",
                height: "100vh",
                padding: isOpen ? "20px" : "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
         {/* Sección principal */}
         <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            {/* Línea inicial */}
            <hr/>

            <div  style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={catalogIcon} alt="catalogo" width="20" />
              <Link to="/catalogo" style={{ color: COLORS.cafe_primario, textDecoration: "none", fontWeight: "bold" }}>
                Catálogo
              </Link>
            </div>
            <hr style={{ border: "none", borderTop: `1px solid ${COLORS.cafe_primario}`, margin: "8px 0", width: "100%" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={cartIcon} alt="carrito" width="20" />
              <Link to="/carrito" style={{ color: COLORS.cafe_primario, textDecoration: "none", fontWeight: "bold" }}>
                Carrito
              </Link>
            </div>
            <hr style={{ border: "none", borderTop: `1px solid ${COLORS.cafe_primario}`, margin: "8px 0", width: "100%" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={contactIcon} alt="contacto" width="20" />
              <Link to="/contacto" style={{ color: COLORS.cafe_primario, textDecoration: "none", fontWeight: "bold" }}>
                Contáctanos
              </Link>
            </div>
            <hr style={{ border: "none", borderTop: `1px solid ${COLORS.cafe_primario}`, margin: "8px 0", width: "100%" }} />
         </div>  

         {/* Sección inferior */}
         <div style={{ marginTop: "20px", alignItems: "flex-start" }}>
            <hr style={{ border: "none", borderTop: `1px solid ${COLORS.cafe_primario}`, margin: "8px 0", width: "100%" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={loginIcon} alt="login" width="20" />
              <Link to="/login" style={{ color: COLORS.cafe_primario, textDecoration: "none", fontWeight: "bold" }}>
                Iniciar sesión
              </Link>
            </div>
         </div> 
        </aside>
    )
}

export default Sidebar
