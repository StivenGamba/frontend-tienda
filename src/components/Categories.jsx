import { COLORS } from "../config/theme"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import cat1 from "../assets/images/cat1.png"
import cat2 from "../assets/images/cat2.png"
import cat3 from "../assets/images/cat3.png"
import cat4 from "../assets/images/cat4.png"

import CategoryCard from "./CategoryCard"

const categories = [
  { name: "Mesa y cocina", img: cat1 },
  { name: "Accesorios", img: cat2 },
  { name: "Jarrones", img: cat3 },
  { name: "Moda", img: cat4 },
  { name: "Extra", img: cat4 },
  { name: "Extra 2", img: cat4 },
]

function Categories() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{
        color: COLORS.cafe_primario,
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "15px",
        textAlign: "center"
      }}>
        CATEGORÍAS
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 }
        }}
        style={{ padding: "0 40px" }}
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <CategoryCard name={cat.name} img={cat.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Categories
