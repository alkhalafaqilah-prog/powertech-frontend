import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import api from "../../api"

const CartPage = () => {

    // This is the cart_code stored in the frontend
    const cart_code = localStorage.getItem("cart_code")

    const [cartitems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0.00)
    const [cartNumItems, setCartNumItems] = useState(0)

    const deliveryFee = 100.00

    // Linking the endpoints of the backend
    useEffect(function(){
        api.get(`get_cart?cart_code=${cart_code}`)
        .then(res => {
            console.log(res.data)
            setCartItems(res.data.items)
            setCartTotal(res.data.sum_total)
            setCartNumItems(res.data.num_of_items)
        })

        .catch(err => {
            console.log(err.message)
        })
    },[])

    if (cartitems.length < 1){
        return (<div className="alert alert-primary my-5" role="alert">
                Your Shopping Cart looks empty.
                </div>
        )
    }

    return (
    <div
    className="container my-3 py-3"
    style={{ height: "80vh", overflow: "scroll" }}>
    <h5 className="mb-4">{`Shopping Cart (${cartNumItems} items)`}</h5>
    <div className="row">
        <div className="col-md-8">
            {cartitems.map(item => <CartItem key={item.id} item={item} cartitems={cartitems} setCartTotal={setCartTotal}/>)}
        
        </div>

        <CartSummary cartTotal ={cartTotal} deliveryFee ={deliveryFee}/>
    </div>
    </div>
)
}

export default CartPage
