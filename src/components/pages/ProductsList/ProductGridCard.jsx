import React,{useContext} from 'react';
import styles from './ProductsList.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
const ProductGridCard = ({ product }) => {
  
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
     const handleDetails = () => {
    // This takes the user to /product/1, /product/2, etc.
    navigate(`/product/${product.id}`);
  };
  const handleBuyNow = (e) => {
    // 🛑 This stops the <Link> from navigating to the Description page
    e.preventDefault(); 
    e.stopPropagation();

    // Option A: Send them straight to checkout with this ID
    // navigate(`/checkout/${product.id}`); 
    
    // Option B: For now, just alert or add to cart
   addToCart(product); 
    
    // ✅ 5. Navigate immediately to the cart page
    navigate('/cart');
  };
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className={styles.gridCard}>
      <div className={styles.gridImgWrapper}>
        <img src={product.image} alt={product.title} onClick={handleDetails} style={{ cursor: 'pointer' }} />
      </div>
      <div className={styles.gridInfo}>
        <div className={styles.gridPriceRow}>
          <span className={styles.gridPrice}>${product.price}</span>
          {product.oldPrice && <span className={styles.gridOldPrice}>${product.oldPrice}</span>}
          <button className={styles.gridWishlist}><i className="far fa-heart"></i></button>
        </div>
        <div className={styles.gridRating}>
          ⭐⭐⭐⭐⭐ <span className={styles.ratingNum}>{product.rating}</span>
        </div>
        <p className={styles.gridTitle}>{product.title}</p>
        <button 
            className={styles.buyNowBtn} 
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
      </div>
    </div>
    </Link>
  );
};

export default ProductGridCard;