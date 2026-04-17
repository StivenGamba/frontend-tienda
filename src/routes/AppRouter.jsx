import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Catalog from "../pages/Catalog"
import Cart from "../pages/Cart"

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRouter