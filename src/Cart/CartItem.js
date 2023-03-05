import { useDispatch } from "react-redux";
import dataCatalogItems from "../data/dataCatalogItems";
import Delete from '../delete.png'
import { removeItemFromCart } from "../redux/cartSlice";


const CartItem = ({cartItem}) => {

    const items = dataCatalogItems.find(item => item.id === cartItem.itemId)
    const dispatch = useDispatch()

    return (
        <div className="cartItem-cont">
            <p className="cartItem">{items.name}  <span onClick={() => dispatch(removeItemFromCart({cartItemId:cartItem.id}))}><img src={Delete} alt="delete" className="iconDelete"/></span></p> 
            <img src={`${items.img}.jpg`} alt="thumbnail" className="thumbnail"/>
            <p className="cartItemQuantity">{cartItem.quantity} item(s)</p>           
            <p className="cartItemPrice"> ${items.price * cartItem.quantity}</p>
        </div>
    )
}

export default CartItem;