import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";
import CartItem from "./CartItem";
import cart from '../cart1.png'

const Cart = () => {

    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)

    return (
        <div className="cart-cont">
            <img src={cart} alt="cart" className="cart"/>
            <h3 className="total">TOTAL: ${totalPrice}</h3>

            {cartItems.map(cartItem =>  <CartItem cartItem={cartItem}/>)}
        </div>
    )
}

export default Cart;