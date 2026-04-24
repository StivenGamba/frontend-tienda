import { COLORS } from "../config/theme"

function CategoryCard({ name, img }) {
  return (
    <div className="category-card">
      <img
        src={img}
        alt={name}
        style={{
          width: "200px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
      />
      <p style={{
        textAlign: "center",
        marginTop: "8px",
        fontWeight: "bold",
        color: COLORS.cafe_primario
      }}>
        {name}
      </p>
    </div>
  )
}

export default CategoryCard
