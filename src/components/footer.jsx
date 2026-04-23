import { CONTACT_INFO, STORES, APP_NAME } from "../config/constants"
import { COLORS } from "../config/theme"
import logo from "../assets/images/logo.png"
import nombre from "../assets/images/nombre.png"
import instagramIcon from "../assets/icons/instagram.png"
import facebookIcon from "../assets/icons/facebook.png"
import twitterIcon from "../assets/icons/x.png"
import tiktokIcon from "../assets/icons/tiktok.png"
import whatsappIcon from "../assets/icons/whatsapp.png"
import youtubeIcon from "../assets/icons/youtube.png"


function Footer() {
  return (
    <footer
      style={{
        background: COLORS.pastel,
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexWrap: "wrap",
        borderTop: `2px solid ${COLORS.cafe_primario}`,
        minHeight: "220px"
      }}
    >
      {/* Logo y nombre */}
      <div style={{ flex: "1", minWidth: "200px", paddingRight: "20px", borderRight: `1px solid ${COLORS.cafe_primario}` }}>
        <img src={logo} alt="logo" width="120" />
        <img src={nombre} alt="nombre" width="120" />
        <p style={{ color: COLORS.cafe_primario }}>Descarga la aplicación</p>
      </div>

      {/* Direcciones */}
      <div style={{ flex: "1", minWidth: "200px", padding: "0 20px", borderRight: `1px solid ${COLORS.cafe_primario}`, textAlign: "left" }}>
        <h4 style={{ color: COLORS.cafe_primario }}>Tiendas</h4>
        <p style={{ color: COLORS.cafe_primario, fontWeight: "bold" }}>Bogotá:</p>
        <p style={{ color: COLORS.cafe_primario }}>{STORES.tienda_1}</p>
        <p style={{ color: COLORS.cafe_primario }}>{STORES.tienda_2}</p>

        <p style={{ color: COLORS.cafe_primario, fontWeight: "bold", marginTop: "10px" }}>Medellín:</p>
        <p style={{ color: COLORS.cafe_primario }}>{STORES.tienda_3}</p>
      </div>

      {/* Contacto */}
      <div style={{ flex: "1", minWidth: "200px", padding: "0 20px", borderRight: `1px solid ${COLORS.cafe_primario}`, textAlign: "left" }}>
        <h4 style={{ color: COLORS.cafe_primario }}>Contacto</h4>
        {CONTACT_INFO.emails.map((email, i) => (
          <p key={i} style={{ color: COLORS.cafe_primario }}>{email}</p>
        ))}
        {CONTACT_INFO.phones.map((phone, i) => (
          <p key={i} style={{ color: COLORS.cafe_primario }}>{phone}</p>
        ))}
      </div>

      {/* Redes sociales */}
      <div style={{ flex: "1", minWidth: "200px", paddingLeft: "20px", textAlign: "center" }}>
        <h4 style={{ color: COLORS.cafe_primario }}>Síguenos</h4>
        
        {/* Fila 1 */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" width="35" className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" width="35" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" width="35" className="social-icon" />
          </a>
        </div>

        {/* Fila 2 */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <img src={tiktokIcon} alt="TikTok" width="35" className="social-icon" />
          </a>
          <a href="https://wa.me/573001002000" target="_blank" rel="noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" width="35" className="social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src={youtubeIcon} alt="YouTube" width="35" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
