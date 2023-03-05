import Filter from "./Filter";

const AllCategories = () => {

    return (
        <div className="all-categories-cont">
            {['All', 'Vase', 'Lamp', 'Candle', 'Armchair', 'Mirror', 'BestSellers'].map((category, index) => <Filter category={category} key={index}/>)}

        </div>
    )
}

export default  AllCategories;