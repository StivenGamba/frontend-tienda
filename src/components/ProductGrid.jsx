import ProductCard from "./ProductCard"
import p1 from "../assets/images/p1.png"
import p2 from "../assets/images/p2.png"
import p3 from "../assets/images/p3.png"

const products = [
  {
    name: "Producto 1",
    img: p1,
    stock: 10,
    price: "60.000"
  },
  {
    name: "Producto 2",
    img: p2,
    stock: 5,
    price: "80.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
]

function ProductGrid() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>TODOS LOS PRODUCTOS</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}
      >
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid