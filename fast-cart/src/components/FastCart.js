import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Navbar from './Navbar';
import CheckoutPage from './CheckoutPage';

const FastCart = () => {
    return ( 
        <div className="fast-cart">
            <BrowserRouter> 
            <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/product/:id' element = {<Product/>}/>
                <Route path='/checkout' element = {<CheckoutPage/>}/>
            </Routes>
            </BrowserRouter>
        </div>
        
    );
}
 
export default FastCart;