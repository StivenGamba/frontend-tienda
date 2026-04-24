import bannerImg from "../assets/images/banner.jpg"

function Banner() {
  return (
    <div style={{ width: "100%", height: "600px", overflow: "hidden" }}>
      <img 
        src={bannerImg} 
        alt="banner"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  )
}

export default Banner