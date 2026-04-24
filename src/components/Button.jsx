function Button({ text, onClick, style }) {
  const styles = {
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: "8px 0",
    },
    button: {
      width: "280px",
      padding: "12px",
      border: "none",
      borderRadius: "5px",
      background: "#b87828",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      ...style // 👈 permite personalizar
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;