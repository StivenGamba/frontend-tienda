import ProductCard from "./ProductCard"
import p1 from "../assets/images/p1.png"
import p2 from "../assets/images/p2.png"
import p3 from "../assets/images/p3.png"
import { useState } from "react"
import { COLORS } from "../config/theme"


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
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
  {
    name: "Producto 3",
    img: p3,
    stock: 7,
    price: "50.000"
  },
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
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 15//   4 filas x 5 columnas

  // Calcular productos visibles
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // Calcular número total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage)

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: COLORS.negro }}>
        TODOS LOS PRODUCTOS
      </h2>

      {/* Grid de productos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}
      >
        {currentProducts.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

      {/* Paginación */}
      <div style={{ marginTop: "20px", textAlign: "center",  }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{ marginRight: "10px", background: "#c9c9c9", color: "000000" }}
        >
          <p style={{ color: "#000000",margin: "3px", }}>Anterior</p> 
        </button>

        <span>Página {currentPage} de {totalPages}</span>

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px", background: "#c9c9c9", color: "000000" }}
        >
         <p style={{ color: "#000000",margin: "3px", }}>Siguiente</p> 
        </button>
      </div>
    </div>
  )
}

export default ProductGrid




