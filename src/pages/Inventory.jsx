import ProductGrid from "../components/ProductGrid"
import { COLORS } from "../config/theme"
import { useNavigate } from "react-router-dom"

function Inventory () {

    const navigate = useNavigate() 

return (
    <div style={{ background: "#ffffff", padding: "20px" }}>

      {/*  Barra superior */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        
        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar producto..."
          style={{
            background: COLORS.blanco,
            padding: "10px",
            marginLeft: "30px",
            paddingLeft:"10px",
            width: "250px",
            borderRadius: "8px",
            border: `1px solid ${COLORS.cafe_primario}`,
            outline: "none",
            color: COLORS.negro,
          }}
        />

        {/* Botón crear */}
        <button onClick={() => navigate("/productoCRUD")}
          style={{
            padding: "10px 15px",
            background: COLORS.cafe_primario,
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
          
        >
          + Crear producto
        </button>

      </div>

      <hr></hr>

      {/* Grid de productos */}
      <ProductGrid />

    </div>
  )
}

export default Inventory