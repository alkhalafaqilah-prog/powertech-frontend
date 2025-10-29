import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import HomePage from "./components/Home/HomePage"
import NotFoundPage from "./components/ui/NotFoundPage"
import ProductPage from "./components/product/ProductPage"


function App() {
  return (
  <BrowserRouter>

  <Routes>
    <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="products/:slug" element={<ProductPage />} />
    <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>

  </BrowserRouter>
  )
}

export default App