import googleIcon from "../assets/icons/google.png"

function SocialButton({ onClick }) {
  const styles = {
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    button: {
      width: "280px",
      padding: "10px",
      border: "1px solid #ccc",
      background: "#fff",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      transition: "0.2s",
    },
    image: {
      width: "20px",
      marginRight: "10px",
    },
  }

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={onClick}
        onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)"}
        onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
      >
        <img src={googleIcon} alt="google" style={styles.image} />
        Iniciar sesión con Google
      </button>
    </div>
  )
}

export default SocialButton