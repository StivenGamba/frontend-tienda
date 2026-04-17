import { Link } from "react-router-dom"

function Sidebar({ isOpen }){
    return(
        <aside
            style={{
                width: isOpen ? "200px" : "0px",
                transition: "0.3s",
                overflow: "hidden",
                background: "#f5e6d3",
                height: "100vh",
                padding: isOpen ? "20px" : "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
         <div>
            <p><Link to="/catalogo">Catálogo</Link></p>    
            <p><Link to="/carrito">Carrito</Link></p>    
            <p><Link to="/Contacto">Contáctanos</Link></p>    
         </div>  

         <div>
            <p><Link to="/login">Iniciar sesión</Link></p>
         </div> 
        </aside>
    )
}

export default Sidebar