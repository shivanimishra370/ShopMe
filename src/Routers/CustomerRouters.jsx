import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Customers/Components/Cart/Cart'
import Footer  from '../Customers/Components/Footer/Footer'
import Product from '../Customers/Components/Product/Product'
import ProductDetails from '../Customers/Components/ProductDetails/ProductDetails'
import Checkout from '../Customers/Components/Checkout/Checkout'
import Order from '../Customers/Components/Order/Order'
import OrderDEtails from '../Customers/Components/Order/OrderDEtails'
import Navigation from '../Customers/Components/Navigation'
import Homepage from '../Customers/Pages/Homepage/Homepage'

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <Routes>
      <Route path="/" element={<Homepage />} /> 
             <Route path="/cart" element={<Cart />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDEtails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRouters;