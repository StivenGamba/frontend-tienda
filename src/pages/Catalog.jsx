import Banner from "../components/Banner"
import Categories from "../components/Categories"
import ProductGrid from "../components/ProductGrid"

function Catalog() {
  return (
    <div style={{background: "#ffffff"}}>
      <Banner />
      <Categories />
      <ProductGrid />
    </div>
  )
}

export default Catalog