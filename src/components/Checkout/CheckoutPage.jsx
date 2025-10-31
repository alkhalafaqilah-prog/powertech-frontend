import OrderSummary from "./OrderSummary"
import PaymentSection from "./PaymentSection"
import useCartData from "../../hooks/useCartData"

const CheckoutPage = () => {
    
    const {cartitems, setCartItems, cartTotal, setCartTotal, loading, deliveryFee} = useCartData()
    
    return (
    <div className="container my-3">

    <div className="row">
        <OrderSummary cartitems={cartitems} cartTotal={cartTotal} deliveryFee={deliveryFee}/>
        <PaymentSection />
    </div>
    </div>
)
}

export default CheckoutPage







