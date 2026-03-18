import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
// import shirt from '../../../assets/images/shirt.png';
import cloth1 from '../../../assets/images/cloth1.png';
import cloth2 from '../../../assets/images/cloth2.png';
import cloth3 from '../../../assets/images/cloth3.png';
import cloth4 from '../../../assets/images/cloth4.png';
import cloth5 from '../../../assets/images/cloth5.png';
import tablet from '../../../assets/images/tablet.png';
import electrickettle from '../../../assets/images/electrickettle.png';
import { products } from '../../../data/products';
import { CartContext } from '../../../context/CartContext';


const ProductDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const [activeTab, setActiveTab] = useState('Description');

    const product = products.find(item => item.id === parseInt(id));

    // 4. Safety check (If ID doesn't exist in data)
    if (!product) {
        return <div className={styles.container}><h2>Product not found</h2></div>;
    }
    const relatedProducts = [
        { id: 101, name: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: cloth1 },
        { id: 102, name: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", img: cloth2 },
        { id: 103, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: cloth3 },
        { id: 104, name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: cloth4 },
        { id: 105, name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: cloth5 },
    ];
    const relatedData = [
        { id: 101, name: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: cloth1 },
        { id: 102, name: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", img: cloth2 },
        { id: 103, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: cloth3 },
        { id: 104, name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: cloth5 },
        { id: 105, name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: tablet },
        { id: 106, name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: electrickettle },
    ];


    const handleAddToCart = () => {
        if (product) {
            addToCart(product); // Send the specific product to the cart
            navigate('/cart');
        }

    };

    return (
        <div className={styles.container}>

            <nav className={styles.breadcrumb}>
                Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
            </nav>


            <div className={styles.mainCard}>


                <section className={styles.galleryCol}>
                    <div className={styles.mainImageWrapper}>
                        <img src={product.image} alt={product.title} />
                    </div>

                </section>


                <section className={styles.infoCol}>
                    <span className={styles.stockStatus}><i className="fa fa-check"></i> In stock</span>
                    <h1 className={styles.productTitle}>{product.title}</h1>

                    <div className={styles.statsRow}>
                        <span className={styles.stars}>⭐⭐⭐⭐ <span className={styles.ratingText}>{product.rating}</span></span>
                        <span className={styles.dot}>•</span>
                        <span><i className="fa fa-comment"></i> {product.reviews} reviews</span>
                        <span className={styles.dot}>•</span>
                        <span><i className="fa fa-shopping-basket"></i> {product.sold} sold</span>
                    </div>

                    <div className={styles.priceGrid}>
                        {/* Check if priceRange exists, otherwise show the single price */}
                        {product.priceRange ? (
                            product.priceRange.map((tier, index) => (
                                <div key={index} className={styles.priceTier}>
                                    <span className={styles.tierPrice}>{tier.price}</span>
                                    <span className={styles.tierQty}>{tier.qty}</span>
                                </div>
                            ))
                        ) : (
                            <div className={styles.priceTier}>
                                <span className={styles.tierPrice}>${product.price}</span>
                                <span className={styles.tierQty}>1 pcs</span>
                            </div>
                        )}
                    </div>

                    <table className={styles.specTable}>
                        <tbody>
                            <tr><td>Price:</td><td>Negotiable</td></tr>
                            <tr><td>Type:</td><td>Classic shoes</td></tr>
                            <tr><td>Material:</td><td>Plastic material</td></tr>
                            <tr><td>Design:</td><td>Modern nice</td></tr>
                        </tbody>
                    </table>
                    <div className={styles.actionRow} style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                        <button className={styles.btnAddToCart} onClick={handleAddToCart}>
                            <i className="fa fa-shopping-cart"></i> Add to cart
                        </button>
                        {/* You can move the Save for later heart here if you prefer it next to the cart button */}
                    </div>
                </section>


                <aside className={styles.supplierCol}>
                    <div className={styles.supplierCard}>
                        <div className={styles.supplierHeader}>
                            <div className={styles.supplierAvatar}>R</div>
                            <div>
                                <p className={styles.supplierLabel}>Supplier</p>
                                <p className={styles.supplierName}>Guanjoi Trading LLC</p>
                            </div>
                        </div>
                        <div className={styles.supplierDetails}>
                            <p><i className="fa fa-flag"></i> Germany, Berlin</p>
                            <p><i className="fa fa-shield-alt"></i> Verified Seller</p>
                            <p><i className="fa fa-globe"></i> Worldwide shipping</p>
                        </div>
                        <button className={styles.btnInquiry}>Send inquiry</button>
                        <button className={styles.btnProfile}>Seller's profile</button>
                    </div>
                    <button className={styles.btnSave}><i className="far fa-heart"></i> Save for later</button>
                </aside>
            </div>
            <div className={styles.bottomSection}>

                <div className={styles.tabWrapper}>
                    <div className={styles.tabHeader}>
                        {['Description', 'Reviews', 'Shipping', 'About seller'].map(tab => (
                            <button
                                key={tab}
                                className={activeTab === tab ? styles.activeTab : ''}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className={styles.tabContent}>
                        {activeTab === 'Description' && (
                            <>
                                <p>{product.description}</p>
                                <table className={styles.detailTable}>
                                    <tbody>
                                        <tr><td>Model</td><td>#8786867</td></tr>
                                        <tr><td>Style</td><td>Classic style</td></tr>
                                    </tbody>
                                </table>
                            </>
                        )}

                        {activeTab === 'Reviews' && (
                            <div className={styles.reviewsList}>
                                {[1, 2].map((rev) => (
                                    <div key={rev} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>U</div>
                                            <strong>User {rev}</strong>
                                            <span style={{ color: '#FF9017' }}>⭐⭐⭐⭐⭐</span>
                                        </div>
                                        <p style={{ marginLeft: '45px', color: '#555' }}>Excellent quality, the cotton feels very premium. Shipping was fast!</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <aside className={styles.relatedCol}>
                    <h3>You may like</h3>
                    {relatedProducts.map((product) => (
                        <div key={product.id} className={styles.relatedCard}>
                            <div className={styles.relatedImgWrapper}>
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className={styles.relatedInfo}>
                                <p className={styles.relatedName}>{product.name}</p>
                                <span className={styles.relatedPrice}>{product.price}</span>
                            </div>
                        </div>
                    ))}
                </aside>

            </div>
            <section className={styles.relatedProductsWrapper}>
                <h3 className={styles.sectionTitle}>Related products</h3>
                <div className={styles.relatedGrid}>
                    {relatedData.map((item) => (
                        <div key={item.id} className={styles.relatedItemCard}>
                            <div className={styles.relatedImgContainer}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className={styles.relatedContent}>
                                <p className={styles.relatedItemTitle}>{item.title}</p>
                                <span className={styles.relatedItemPrice}>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.blueBanner}>
                <div className={styles.bannerInfo}>
                    <h2>Super discount on more than 100 USD</h2>
                    <p>Have you ever finally just write dummy info</p>
                </div>
                <button className={styles.bannerBtn}>Shop now</button>
            </section>
        </div>
    );
};

export default ProductDetail;