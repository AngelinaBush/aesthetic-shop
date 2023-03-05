import './App.css';
import Cart from './Cart/Cart';
import Catalog from './Components/Catalog/Catalog';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  
  return (
    <div>

      <div className='shipping-cont'>
        <p className='shipping'>DIRECT SHIPPING TO 100 COUNTRIES</p>
      </div>

      <div className='main-header-cont'>
        <h1>Aesthetic</h1>
      </div>

      <div>
        <AllCategories/>
      </div>

      <div className='cart-catalog-cont'>
        <div className='cart'><Cart/></div>
        <div className='catalog'><Catalog/></div>
      </div>



    </div>
  )

}

export default App;
