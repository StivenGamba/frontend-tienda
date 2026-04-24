const InputField = ({ 
  type = "text", 
  placeholder, 
  icon, 
  value, 
  onChange 
}) => {

  const styles = {
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: "10px 0",
    },
    inputGroup: {
      display: "flex",
      alignItems: "center",
      width: "280px",
      background: "white",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    icon: {
      fontSize: "20px",
      marginRight: "10px",
      color: "#555",
    },
    input: {
      border: "none",
      outline: "none",
      width: "100%",
      fontSize: "16px",
      background: "transparent",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputGroup}>
        {icon && <span style={styles.icon}>{icon}</span>}
        
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={styles.input}
        />
      </div>
    </div>
  );
};

export default InputField;