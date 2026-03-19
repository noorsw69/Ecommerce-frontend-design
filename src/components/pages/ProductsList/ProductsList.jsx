// import React from 'react';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductsList.module.css';
import ProductRowCard from './ProductRowCard';
import ProductGridCard from './ProductGridCard';
import { products } from '../../../data/products';


const FilterGroup = ({ title, items, isCheckbox }) => (
  <div className={styles.filterGroup}>
    <h4>{title}</h4>
    <ul>
      {items.map((item) => (
        <li key={item}>
          {isCheckbox ? (
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> {item}
            </label>
          ) : (
            <Link
              to={item === "All Categories" ? "/ProductsList" : `/ProductsList/${item}`}
              className={styles.filterLink}
            >
              {item}
            </Link>
          )}
        </li>
      ))}
      <li className={styles.seeAll}>See all</li>
    </ul>
  </div>
);


const ProductList = () => {

  const { categoryName } = useParams();
  const [viewMode, setViewMode] = useState('grid');

  const [visibleCount, setVisibleCount] = useState(6);
  const filteredProducts = categoryName && categoryName !== "All Categories"
    ? products.filter(p => p.category?.toLowerCase() === categoryName.toLowerCase())
    : products;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };
  const handleShowLess = () => {
    setVisibleCount(6); // Reset back to the original number
  };

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const categories = ["Tech", "Clothes", "Interior", "All Categories"];
  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];

  return (
    <div className={styles.pageContainer}>
      <nav className={styles.breadcrumb}>
        Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
      </nav>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>

          <FilterGroup title="Category" items={categories} isCheckbox={false} />
          <FilterGroup title="Brands" items={brands} isCheckbox={true} />

          {/* range */}
          <div className={styles.filterGroup}>
            <h4>Price range</h4>
            <div className={styles.priceInputs}>
              <input type="number" placeholder="Min" className={styles.priceInput} />
              <input type="number" placeholder="Max" className={styles.priceInput} />
            </div>
            <button className={styles.applyBtn}>Apply</button>
          </div>

          {/* radio buttons */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <h4>Condition</h4>
              <i className="fa fa-chevron-up"></i>
            </div>
            <div className={styles.filterContent}>
              {["Any", "Refurbished", "Brand new", "Old items"].map((label, index) => (
                <label key={label} className={styles.radioLabel}>
                  <input type="radio" name="condition" defaultChecked={index === 0} />
                  <span className={styles.customRadio}></span>
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Ratings Section - Using Checkboxes + Stars */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <h4>Ratings</h4>
              <i className="fa fa-chevron-up"></i>
            </div>
            <div className={styles.filterContent}>
              {[5, 4, 3, 2].map((rating) => (
                <label key={rating} className={styles.checkboxLabel}>
                  <input type="checkbox" />
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-star ${i < rating ? 'fas' : 'far'}`}
                        style={{ color: i < rating ? '#FF9017' : '#D1D1D1' }}
                      ></i>
                    ))}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className={styles.productSection}>
          <div className={styles.topStatsBar}>
            <span>
              {filteredProducts.length.toLocaleString()} items in <b>{categoryName ? categoryName : "All Categories"}</b>
            </span>
            <div className={styles.controls}>
              <label><input type="checkbox" /> Verified only</label>
              <select className={styles.sortSelect}>
                <option>Featured</option>
              </select>
              <div className={styles.viewToggleGroup}>
                <button
                  className={viewMode === 'grid' ? styles.activeBtn : styles.toggleBtn}
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fa fa-th"></i>
                </button>
                <button
                  className={viewMode === 'list' ? styles.activeBtn : styles.toggleBtn}
                  onClick={() => setViewMode('list')}
                >
                  <i className="fa fa-list"></i>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.filterChipsRow}>
            {["Samsung", "Apple", "Poco", "Metallic", "4 star"].map(chip => (
              <div key={chip} className={styles.chip}>
                {chip} <i className="fa fa-times"></i>
              </div>
            ))}
            <button className={styles.clearAll}>Clear all filter</button>
          </div>

          <div className={viewMode === 'grid' ? styles.gridDisplay : styles.listDisplay}>
            {visibleProducts.map((item) => (
              viewMode === 'grid' ? (
                <ProductGridCard key={item.id} product={item} />
              ) : (
                <ProductRowCard key={item.id} products={item} />
              )
            ))}
          </div>
          <div className={styles.paginationRow}>
            <div className={styles.showMoreWrapper}>
              {visibleCount < filteredProducts.length ? (
                <button className={styles.showMoreBtn} onClick={handleShowMore}>
                  Show more <i className="fa fa-chevron-down"></i>
                </button>
              ) : (
                <button className={styles.showMoreBtn} onClick={handleShowLess}>
                  Show less <i className="fa fa-chevron-up"></i>
                </button>
              )}
            </div>

            <div className={styles.pageNumbers}>
              <button className={styles.arrowBtn}>&lt;</button>
              <button className={`${styles.numBtn} ${styles.active}`}>1</button>
              <button className={styles.numBtn}>2</button>
              <button className={styles.numBtn}>3</button>
              <button className={styles.arrowBtn}>&gt;</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;