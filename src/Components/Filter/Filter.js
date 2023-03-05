import { useDispatch, useSelector} from 'react-redux'
import { filterCategory, getSelectedCategory } from '../../redux/catalogSlice';

const Filter = ({category}) => {
    
    const selectedCategory = useSelector(getSelectedCategory)
    const dispatch = useDispatch()

    return (
        <div>
            <p onClick={()=>dispatch(filterCategory(category))} className={selectedCategory === category ? 'btnSelectedCategory btn' : 'btnCategory btn'}>{category}</p>
        </div>
    )
}

export default Filter;