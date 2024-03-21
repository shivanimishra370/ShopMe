import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Customers/Components/Navigation';
import Footer from './Customers/Components/Footer/Footer' 
import Homepage from './Customers/Pages/Homepage/Homepage';
// import Signin from './Customers/Components/signin/Signin';
import { Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
function App() {
  return (
    
        <div >
        

<Routes>

<Route path='/*' element={<CustomerRouters/>}></Route>
</Routes>

     

        </div>
      
         

  
  );
}

export default App;
