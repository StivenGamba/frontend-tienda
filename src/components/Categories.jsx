import {COLORS} from "../config/theme"
import cat1 from "../assets/images/cat1.png"
import cat2 from "../assets/images/cat2.png"
import cat3 from "../assets/images/cat3.png"
import cat4 from "../assets/images/cat4.png"

const categories = [
  { name: "Mesa y cocina", img:cat1 },
  { name: "Accesorios", img: cat2 },
  { name: "Jarrones", img: cat3 },
  { name: "Moda", img: cat4},
]

function Categories() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{color: COLORS.cafe_primario}}>CATEGORÍAS</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
        }}
      >
        {categories.map((cat, i) => (
          <div key={i} style={{ minWidth: "150px", cursor: "pointer" }}>
            <img
              src={cat.img} 
              alt={cat.name}
              style={{    width: "300px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px"}}
            />
            <p style={{ textAlign: "center" }}>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories