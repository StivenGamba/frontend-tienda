import filterIcon from "../assets/icons/filtrar.png"
import { COLORS } from "../config/theme"

function FilterBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "3px 15px",
        background: COLORS.gris_claro,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {/* Icono + texto */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src={filterIcon} alt="filtro" width="20" />
        <span style={{ color: COLORS.gris }}>
          Filtrar por
        </span>
      </div>

      {/* Línea vertical */}
      <div style={{
        width: "1px",
        height: "20px",
        background: COLORS.gris
      }} />

      {/* Categorías */}
      <div style={{ display: "flex", gap: "20px" }}>
        <button className="filter-btn">Todos</button>
        <button className="filter-btn">Arte</button>
        <button className="filter-btn">Accesorios</button>
        <button className="filter-btn">Decoración</button>
      </div>
    </div>
  )
}

export default FilterBar