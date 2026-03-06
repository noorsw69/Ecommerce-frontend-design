import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>

      <main className="main-placeholder">
        <div className="hero-placeholder">
          <h1>Welcome to Your eCommerce Site</h1>
         
        </div>

        {/* Some extra space so footer is not too close */}
        <div className="spacer">
          <p>Main content area (products, categories, etc.)</p>
        </div>
      </main>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App
