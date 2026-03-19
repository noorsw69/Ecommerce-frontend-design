import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo-colored.png';
import profile from '../../../assets/icons/profile.png';
import message from '../../../assets/icons/message.png';
import heart from '../../../assets/icons/heart.png';
import cart from '../../../assets/icons/cart.png';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();


  useEffect(() => {

    const pathParts = location.pathname.split('/');
    const categoryFromUrl = pathParts[pathParts.length - 1];
     if (location.pathname.includes('ProductsList') && categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("");
    }
  }, [location]);
const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const navigate = useNavigate();
  const handleSearch = (e) => {
  e.preventDefault(); 
  
  if (selectedCategory === 'all' || selectedCategory === '') {
    navigate('/ProductsList');
  } else {
    navigate(`/ProductsList/${selectedCategory}`);
  }
};

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            src={logo}
            alt="Brand Logo"
            className={styles.logo}
          />
        </Link>
      </div>
      <form className={styles.searchForm} onSubmit={handleSearch}>


        <input
          type="search"
          placeholder="Search for products, brands..."
          className={styles.searchInput}
        />
        <select className={styles.categorySelect} value={selectedCategory} onChange={handleChange} >
          <option value="all">All Categories</option>
          <option value="tech">Tech</option>
          <option value="interior">Interior</option>
          <option value="clothes">Clothes</option>

        </select>

        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <nav className={styles.mobileCategoryNav}>
        <button 
         onClick={() => {
    // 1. Reset the category state to 'all'
    setSelectedCategory('all'); 
    
    // 2. Navigate to the products page
    navigate('/ProductsList', { state: { category: 'all' } }); 
  }} 
  className={`${styles.navBtn} ${selectedCategory === 'all' ? styles.activeNav : ''}`}
>
  All category
        </button>
        <button 
          onClick={() => navigate('/ProductsList/Tech')} 
          className={`${styles.navBtn} ${selectedCategory === 'Tech' ? styles.activeNav : ''}`}
        >
          Tech
        </button>
        <button 
          onClick={() => navigate('/ProductsList/clothes')} 
          className={`${styles.navBtn} ${selectedCategory === 'clothes' ? styles.activeNav : ''}`}
        >
          Clothes
        </button>
        <button 
          onClick={() => navigate('/ProductsList/interior')} 
          className={`${styles.navBtn} ${selectedCategory === 'interior' ? styles.activeNav : ''}`}
        >
          Interior
        </button>
      </nav>
      <div className={styles.actions}>
        {/* Each item is a column: icon + text */}
        <Link to="#" className={styles.actionItem}>
          <img src={profile} alt="Profile" className={styles.actionIcon} />
          <span className={styles.actionText}>Profile</span>
        </Link>

        <Link to="#" className={styles.actionItem}>
          <img src={message} alt="Messages" className={styles.actionIcon} />
          <span className={styles.actionText}>Messages</span>
        </Link>

        <Link to="#" className={styles.actionItem}>
          <img src={heart} alt="Orders" className={styles.actionIcon} />
          <span className={styles.actionText}>Orders</span>
        </Link>

        <Link to="/cart" className={styles.actionItem}>
          <div className={styles.cartWrapper}>
            <img src={cart} alt="Cart" className={styles.actionIcon} />
          </div>
          <span className={styles.actionText}>My Cart</span>
        </Link>
      </div>
      
      <div className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ''}`}>
  {/* Header Section */}
  <div className={styles.sidebarHeader}>
    <button className={styles.closeBtn} onClick={toggleMenu}>&times;</button>
    <div className={styles.userAvatar}>
      <i className="fas fa-user-circle"></i>
    </div>
    <div className={styles.signInText}>Sign in | Register</div>
  </div>
  
  <ul className={styles.sidebarLinks}>
    {/* Group 1: Main Navigation */}
    <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
    <li><Link to="/categories"><i className="fas fa-list"></i> Categories</Link></li>
    <li><Link to="/favorites"><i className="fas fa-heart"></i> Favorites</Link></li>
    <li><Link to="/orders"><i className="fas fa-box-open"></i> My orders</Link></li>
    
    <div className={styles.divider}></div>

    {/* Group 2: Settings & Support */}
    <li><Link to="#"><i className="fas fa-globe"></i> English | USD</Link></li>
    <li><Link to="#"><i className="fas fa-headset"></i> Contact us</Link></li>
    <li><Link to="#"><i className="fas fa-building"></i> About</Link></li>
    
    <div className={styles.divider}></div>

    {/* Group 3: Legal (Text only) */}
    <li className={styles.plainLink}><Link to="#">User agreement</Link></li>
    <li className={styles.plainLink}><Link to="#">Partnership</Link></li>
    <li className={styles.plainLink}><Link to="#">Privacy policy</Link></li>
  </ul>
</div>
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </header>
    

  )
  

}
export default Header