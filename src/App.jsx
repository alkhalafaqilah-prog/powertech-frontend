import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import HomePage from "./components/Home/HomePage"
import NotFoundPage from "./components/ui/NotFoundPage"
import ProductPage from "./components/product/ProductPage"
import CartPage from "./components/Cart/CartPage"
import CheckoutPage from "./components/Checkout/CheckoutPage"
import LoginPage from "./components/user/LoginPage"
import ProtectedRoute from "./components/ui/ProtectedRoute"
import { useEffect, useState } from "react"
import api from "./api"
import { AuthProvider } from "./context/AuthContext"
import UserProfilePage from "./components/user/UserProfilePage"
import PaymentStatusPage from "./components/payments/PaymentStatusPage"


function App() {

  const [numCartItems, setNumberCartItems] = useState(0)
  const cart_code = localStorage.getItem("cart_code")

  // This function is for showing the No. of items above the Cart icon
  useEffect(function(){
    if(cart_code){
    api.get(`get_cart_stat?cart_code=${cart_code}`)
    .then(res => {
      console.log(res.data)
      setNumberCartItems(res.data.num_of_items)
    })

    .catch(err =>{
      console.log(err.message)
    })
    }

  },[])

  return (

  <AuthProvider>
  <BrowserRouter>

  <Routes>
    <Route path="/" element={<MainLayout numCartItems= {numCartItems} />}>
    <Route index element={<HomePage />} />
    <Route path="products/:slug" element={<ProductPage setNumberCartItems={setNumberCartItems}/>} />
    <Route path="cart" element={<CartPage setNumberCartItems={setNumberCartItems}/>} />
    <Route path="checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
    <Route path="login" element={<LoginPage />} />
    <Route path="profile" element={<UserProfilePage/>}/>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="payment-status" element={<PaymentStatusPage/>}/>
    </Route>
  </Routes>

  </BrowserRouter>
  </AuthProvider>
  )
}

export default App