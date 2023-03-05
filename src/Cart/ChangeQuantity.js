import ChevronUp from '../chevron-up.png'
import ChevronDown from '../chevron-down.png'


const ChangeQuantity = ({quantity, setQuantity}) => {
    
    const addQuantity = () => {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1
        setQuantity(newQuantity)
    }

    return (
        <div className="changeQuantity-cont">
            <div className="quantity-cont">
                <p className='quantity'>{quantity}</p>
            </div>
            <div className="increm-decrem-cont">
                <button onClick={addQuantity} className='chevron1 chevron'><img src={ChevronUp} alt="chevron" className='iconChevron'/> </button>
                <button onClick={removeQuantity} className='chevron2 chevron'><img src={ChevronDown} alt="chevron" className='iconChevron'/>  </button>
            </div>
            
        </div>
    )
}

export default ChangeQuantity;