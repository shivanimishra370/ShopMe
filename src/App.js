import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Customers/Components/Navigation';
import Homepage from './Customers/Pages/Homepage/Homepage';
import Footer from './Customers/Components/Footer/Footer';
import Product from './Customers/Components/Product/Product';
import ProductDetails from './Customers/Components/ProductDetails/ProductDetails';
import Cart from './Customers/Components/Cart/Cart';
import CartItem from './Customers/Components/Cart/CartItem';
import Checkout from './Customers/Components/Cart/Checkout/Checkout';
import Order from './Customers/Components/Order/Order';
import OrderDEtails from './Customers/Components/Order/OrderDEtails';
// import Signin from './Customers/Components/signin/Signin';
import { Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
function App() {
  return (
        <div className="">
<div>
  <Navigation/>
</div>
<Routes>
<Route path='/*' element={<CustomerRouters/>}></Route>
</Routes>
     

        </div>
         

  
  );
}

export default App;
