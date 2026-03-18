import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import ProductsList from './components/pages/ProductsList';
import ProductDetails from './components/pages/ProductDetails';
import Cart from './components/pages/Cart';
import { products } from './data/products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
       <Header/>
      <Navbar/>
      <Routes>
       
        <Route path="/" element={<div className="content-wrapper">
        <Home />
      </div>} />
        <Route path="/ProductsList/:categoryName" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetails  product={products}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Newsletter/>
      <Footer/>
      </BrowserRouter>
      
      
    </>
  );
}

export default App
