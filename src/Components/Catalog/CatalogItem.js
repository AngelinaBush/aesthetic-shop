import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from 'react-redux'
import ChangeQuantity from "../../Cart/ChangeQuantity";

const CatalogItem = ({catalogItem}) => {

    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()


    return (
        <div className="catalogItem-cont">
            <h2>{catalogItem.name}</h2>
            <img src={`${catalogItem.img}.jpg`} alt='decor'/>

            <div className="catalogItem-description-cont">
                <div className="price-cont">
                    <p className="price">$ {catalogItem.price}</p>
                </div>

                <div className="addToBag-quantity-cont">
                    <button className="addBtn" onClick={() => dispatch(addItemToCart({catalogItem, quantity}))}>Add to cart</button>
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                </div>
                
            </div>
        </div>
    )
}

export default CatalogItem;