import React from 'react'
import styles from './Header.module.css';
import logo from '../../../assets/images/logo-colored.png';
import profile from '../../../assets/icons/profile.png';
import message from '../../../assets/icons/message.png';
import heart from '../../../assets/icons/heart.png';
import cart from '../../../assets/icons/cart.png';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo}
          alt="Brand Logo"
          className={styles.logo}
        />
      </div>
      <form className={styles.searchForm}>


        <input
          type="search"
          placeholder="Search for products, brands..."
          className={styles.searchInput}
        />
        <select className={styles.categorySelect}>
          <option>All Categories</option>
          {/* more options later */}
        </select>

        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <div className={styles.actions}>
        {/* Each item is a column: icon + text */}
        <a href="#" className={styles.actionItem}>
          <img src={profile} alt="Profile" className={styles.actionIcon} />
          <span className={styles.actionText}>Profile</span>
        </a>

        <a href="#" className={styles.actionItem}>
          <img src={message} alt="Messages" className={styles.actionIcon} />
          <span className={styles.actionText}>Messages</span>
        </a>

        <a href="#" className={styles.actionItem}>
          <img src={heart} alt="Orders" className={styles.actionIcon} />
          <span className={styles.actionText}>Orders</span>
        </a>

        <a href="#" className={styles.actionItem}>
          <div className={styles.cartWrapper}>
            <img src={cart} alt="Cart" className={styles.actionIcon} />
            </div>
          <span className={styles.actionText}>My Cart</span>
        </a>
      </div>
    </header>

  )

}
export default Header