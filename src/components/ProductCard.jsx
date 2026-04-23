function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "8px"
    }}>
      <img 
        src={product.img} 
        alt={product.name}
        style={{    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px" }}
      />

      <p>{product.name}</p>

      {/* estrellas fake */}
      <p>aqui van las estrellas</p>

      <p>Stock: {product.stock}</p>

      <p style={{ color: "green" }}>
        ${product.price}
      </p>
    </div>
  )
}

export default ProductCard