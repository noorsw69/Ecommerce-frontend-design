import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import { CartContext } from '../../../context/CartContext';
import shirt from '../../../assets/images/shirt.png';

const Cart = () => {
    const { cartItems,savedItems,saveForLater,moveToCart, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Calculate Subtotal dynamically
    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
    const discount = cartItems.length > 0 ? 60.00 : 0;
    const tax = cartItems.length > 0 ? 14.00 : 0;
    const total = subtotal - discount + tax;

    return (

        <div className={styles.pageWrapper}>

            <div className={styles.container}>
                <div className={styles.cartMain}>
                    <div className={styles.cartCard}>
                        <h3 className={styles.cartTitle}>My cart ({cartItems.length})</h3>

                        {cartItems.length === 0 ? (
                            <div className={styles.emptyMessage}>
                                <p>Your cart is empty.</p>
                                <button className={styles.btnBack} onClick={() => navigate('/')}>Shop Now</button>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.itemImg}>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h4>{item.title}</h4>
                                        <p>Size: medium, Color: blue, Material: Plastic</p>
                                        <p className={styles.seller}>Seller: Artel Market</p>
                                        <div className={styles.itemActions}>
                                            <button
                                                className={styles.btnRemove}
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                            <button className={styles.btnSave} onClick={() => saveForLater(item)}>Save for later</button>
                                        </div>
                                    </div>
                                    <div className={styles.itemPricing}>
                                        <span className={styles.price}>${item.price}</span>
                                        <select className={styles.qtySelect} defaultValue={item.quantity}>
                                            <option>Qty: {item.quantity}</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                            ))
                        )}

                        <div className={styles.cartFooter}>
                            <button className={styles.btnBack} onClick={() => navigate('/')}>← Back to shop</button>
                            <button className={styles.btnRemoveAll} onClick={() => clearCart()}>Remove all</button>
                        </div>
                    </div>


                    <div className={styles.featuresRow}>
                        <div className={styles.feature}>
                            <div className={styles.iconCircle}>
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className={styles.featureText}>
                                <h5>Secure payment</h5>
                                <p>Have you ever finally just</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.iconCircle}>
                                <i className="fas fa-comment-dots"></i>
                            </div>
                            <div className={styles.featureText}>
                                <h5>Customer support</h5>
                                <p>Have you ever finally just</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.iconCircle}>
                                <i className="fas fa-truck"></i>
                            </div>
                            <div className={styles.featureText}>
                                <h5>Free delivery</h5>
                                <p>Have you ever finally just</p>
                            </div>
                        </div>
                    </div>
                    {/* Saved for Later Section */}
<div className={styles.savedForLaterCard}>
  <h3 className={styles.savedTitle}>Saved for later ({savedItems.length})</h3>
  
  {savedItems.length === 0 ? (
    <p style={{color: '#8b96a5'}}>No items saved yet.</p>
  ) : (
    <div className={styles.savedGrid}>
      {savedItems.map((item) => (
        <div key={item.id} className={styles.savedItem}>
          <div className={styles.savedImgWrapper}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.savedInfo}>
            <p className={styles.savedPrice}>${item.price}</p>
            <p className={styles.savedText}>{item.title}</p>
            <button 
              className={styles.moveToCartBtn}
              onClick={() => moveToCart(item)}
            >
              <i className="fas fa-shopping-cart"></i> Move to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
                </div>


                <aside className={styles.sidebar}>
                    <div className={styles.couponCard}>
                        <p>Have a coupon?</p>
                        <div className={styles.couponInput}>
                            <input type="text" placeholder="Add coupon" />
                            <button>Apply</button>
                        </div>
                    </div>
                    <div className={styles.summaryCard}>
                        <div className={styles.summaryRow}>
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className={styles.summaryRow} style={{ color: '#fa3434' }}>
                            <span>Discount:</span>
                            <span>- ${discount.toFixed(2)}</span>
                        </div>
                        <div className={styles.summaryRow} style={{ color: '#00b517' }}>
                            <span>Tax:</span>
                            <span>+ ${tax.toFixed(2)}</span>
                        </div>

                        <hr className={styles.separator} />

                        <div className={styles.totalRow}>
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button className={styles.checkoutBtn}>Checkout</button>
                    </div>
                </aside>
            </div>
        </div>

    );
};
export default Cart;