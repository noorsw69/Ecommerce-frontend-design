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
  const handleSearch = () => {
    if (selectedCategory === 'all') {
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
          <option>All Categories</option>
          <option value="tech">Tech</option>
          <option value="interior">Interior</option>
          <option value="clothes">Clothes</option>

        </select>

        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
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
        <div className={styles.sidebarHeader}>
          <img src={profile} alt="user" className={styles.sidebarUserIcon} />
          <span>Sign in | Register</span>
          <button className={styles.closeBtn} onClick={toggleMenu}>&times;</button>
        </div>
        <ul className={styles.sidebarLinks}>
          <li onClick={toggleMenu}><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
          <li onClick={toggleMenu}><Link to="/categories"><i className="fas fa-list"></i> Categories</Link></li>
          <li onClick={toggleMenu}><Link to="/favorites"><i className="fas fa-heart"></i> Favorites</Link></li>
          <li onClick={toggleMenu}><Link to="/orders"><i className="fas fa-box"></i> My orders</Link></li>
          <hr />
          <li><i className="fas fa-globe"></i> English | USD</li>
          <li><i className="fas fa-envelope"></i> Contact us</li>
          <li><i className="fas fa-info-circle"></i> About</li>
        </ul>
      </div>

      {/* 3. Overlay (Darken background when menu is open) */}
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </header>

  )

}
export default Header