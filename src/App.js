// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navigation from './Customers/Components/Navigation';
// import Footer from './Customers/Components/Footer/Footer' 
// import Homepage from './Customers/Pages/Homepage/Homepage';
// import { Routes } from 'react-router-dom';
// import CustomerRouters from './Routers/CustomerRouters';
// function App() {
//   return (
    
//         <div >
        

// <Routes>

// <Route path='/*' element={<CustomerRouters/>}></Route>
// </Routes>

     

//         </div>
      
         

  
//   );
// }

// export default App;import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './Customers/Components/Navigation';
import Footer from './Customers/Components/Footer/Footer' 
import Homepage from './Customers/Pages/Homepage/Homepage';
import { Routes } from 'react-router-dom';
// import CustomerRouters from './Routers/CustomerRouters';
import Cart from './Customers/Components/Cart/Cart';
import Signin from './Customers/Components/signin/Signin';
import OrderDEtails from './Customers/Components/Order/OrderDEtails';
import Checkout from './Customers/Components/Checkout/Checkout';
import Order from './Customers/Components/Order/Order';
import ProductDetails from './Customers/Components/ProductDetails/ProductDetails';
import Product from './Customers/Components/Product/Product';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        
        <Route path='/*' element={<Homepage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/myorder' element={<OrderDEtails/>}></Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
