import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import FilterBar from "../components/FilterBar"
import Footer from "../components/footer"
import { useState } from "react"

function MainLayout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <Navbar toggleSidebar={() => setOpen(!open)} />

      {/* Contenido horizontal */}
      <div style={{ display: "flex", width: "100%"}}>
        
        {/* Sidebar */}
        <Sidebar isOpen={open} />

        {/* Contenido */}
        <div style={{ flex: 1, padding: "0px" }}>
          <FilterBar />
          {children}
        </div>
       
      </div>
       <Footer/>
    </>
  )
}

export default MainLayout