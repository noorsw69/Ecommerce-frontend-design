import styles from './Navbar.module.css';
import Hamburger from '../../../assets/icons/Hamburger.png';
import arrow from '../../../assets/icons/arrow.png';
import Flag from '../../../assets/images/Flag.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <button className={styles.navButton} type="button">
            <img
              src={Hamburger}
              alt=""
              className={styles.navIconLeft}
            />
            All Categories
          </button></li>
        <li><a href="#" className={styles.navLink}>Hot Offers</a></li>
        <li><a href="#" className={styles.navLink}>Gift Boxes</a></li>
        <li><a href="#" className={styles.navLink}>Projects</a></li>
        <li><a href="#" className={styles.navLink}>Menu Items</a></li>
        <li>
          <button className={styles.navButton} type="button">
            Help
            <img
              src={arrow}
              alt=""
              className={styles.navIconRight}
            />
          </button></li>

      </ul>
      <div className={styles.rightActions}>
        <button className={styles.languageBtn}>
          English,USD
          <img
            src={arrow}
            alt=""
            className={styles.arrowIcon}
          />
        </button>

        <button className={styles.languageBtn}>
          Ship To
          <img
            src={Flag}
            alt="English"
            className={styles.languageFlag}
          />

          <img
            src={arrow}
            alt=""
            className={styles.arrowIcon}
          />
        </button>
      </div>

    </nav>
  );
};
export default Navbar;