import {useState} from "react"
import './App.css';
import data from "./back/Data/Data"
import Header from "./front/header/Header"
import {BrowserRouter as Router} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import Products from "./front/Products/Products"
import Routing from "./front/Routing/Routing"
import Cart from "./front/Cart/Cart"


function App() {


  const {productItems} = data;

  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id )
    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id?
      {...ProductExist, quantity:ProductExist.quantity +1}:item))
    }else{
      setCartItems([...cartItems, {...product,quantity:1}])
    }
  }


  return (
    <div className="App">
        <Router>
            <Header/>
            
            <Routes>
            <Route path = "/" exact element = {<Products productItems={productItems} handleAddProduct = {handleAddProduct}/>}>

              </Route>

              <Route path = "/cart"  exact element = {<Cart cartItems={cartItems} handleAddProduct = {handleAddProduct}/>}>

              </Route>
            </Routes>

        </Router>
    </div>
  );
}

export default App;
