import { useSelector } from "react-redux";
import dataCatalogItems from "../../data/dataCatalogItems"
import { getSelectedCategory } from "../../redux/catalogSlice";
import CatalogItem from "./CatalogItem";

const Catalog = () => {
    
    const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div className="catalog-cont"> 
            {dataCatalogItems
            .filter(item => {
                if (selectedCategory === 'All') return true;
                return item.category.map(category => category).includes(selectedCategory);
            })
            .map(item => <CatalogItem catalogItem={item} key={item.id}/>)}
        </div>
    )
}

export default Catalog;