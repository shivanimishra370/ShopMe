import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customers/Pages/Homepage/Homepage'
import Cart from '../Customers/Components/Cart/Cart'
import Footer from '../Customers/Components/Footer/Footer'
import Product from '../Customers/Components/Product/Product'
import ProductDetails from '../Customers/Components/ProductDetails/ProductDetails'
import Checkout from '../Customers/Components/Cart/Checkout/Checkout'
import Order from '../Customers/Components/Order/Order'
import OrderDEtails from '../Customers/Components/Order/OrderDEtails'
const CustomerRouters = () => {
  return (
    <div>
      <div>

      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:laveltwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/Checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDEtails/>}></Route>


      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
