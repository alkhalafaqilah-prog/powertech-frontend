import { useState } from "react"
import { BASE_URL } from "../../api"
import api from "../../api"

const CartItem = ({item, setCartTotal, cartitems, setNumberCartItems,setCartNumItems}) => {

    const [quantity, setQuantity] = useState(item.quantity)
    
    // Variable for sending the item id & quantity from frontend to backend
    const itemData = {quantity: quantity, item_id: item.id}

    function updateCartitem(){
        api.patch("update_quantity/", itemData)
        .then(res => {
            console.log(res.data)
            setCartTotal(cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem)
            .reduce((acc, curr) => acc + curr.total, 0))

            //Updating the number of cart items in frontend without the need to refreah
            const newTotalQuantity = cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem)
            .reduce((acc, curr) => acc + curr.quantity, 0)

            // Update the Navbar count
            setNumberCartItems(newTotalQuantity)
            
            // Update the CartPage heading count 
            setCartNumItems(newTotalQuantity)
        })

        .catch(err =>{
            console.log(err.message)
        })
    }

    return (
    <div className="col-md-12">
          {/* Cart Items */}
        <div
            className="cart-item d-flex align-items-center mb-3 p-3"
            style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}
        >
            <img
            src={`${BASE_URL}${item.product.img}`}
            alt="Product Image"
            className="img-fluid"
            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <div className="ms-3 flex-grow-1">
            <h5 className="mb-1">{item.product.name}</h5>
            <p className="mb-0 text-muted">{`${item.product.price} SAR`}</p>
            </div>
            <div className="d-flex align-items-center">
            <input
                type="number"
                min="1"
                className="form-control me-3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value) }
                style={{ width: '70px' }}
            />
            <button className="btn btn-sm mx-2" 
            onClick={updateCartitem}
            style={{backgroundColor: "#008080", color:"white"}}>
                Update
                </button>
            <button className="btn btn-danger btn-sm" >Remove</button>
            </div>
        </div>

        </div>
)
}

export default CartItem
