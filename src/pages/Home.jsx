import Banner from "../components/Banner"
import Categories from "../components/Categories"
import ProductGrid from "../components/ProductGrid"

function Home(){
    return (

    <div style={{background: "#ffffff"}}>
      <Banner />
      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "20px"
        }}
        >
        <Categories />
        <ProductGrid />
      </div>

    </div>

    )
}

export default Home