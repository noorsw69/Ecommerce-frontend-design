import React from 'react';
import styles from './ProductsList.module.css';
import { Link, useNavigate } from 'react-router-dom';

const ProductRowCard = ({ products }) => {
  if (!products) return null;

  return (
    <div className={styles.productCard}>
      <div className={styles.imgBox}>
        <img src={products.image} alt={products.title} />
      </div>
      
      <div className={styles.detailsBox}>
        <h3 className={styles.title}>{products.title}</h3>
        <p className={styles.price}>
          ${products.price} s
          {products.oldPrice && <span className={styles.oldPrice}>${products.oldPrice}</span>}
        </p>
        <div className={styles.ratingRow}>
          ⭐⭐⭐⭐⭐ <span className={styles.ratingText}>{products.rating} • {products.orders} orders • </span>
          <span className={styles.shipping}>Free Shipping</span>
        </div>
        <p className={styles.description}>{products.description}</p>
        <Link to={`/product/${products.id}`}>
        <button className={styles.viewBtn}>View details</button></Link>
      </div>

      <button className={styles.wishlistBtn}>♡</button>
    </div>
  );
};

export default ProductRowCard;