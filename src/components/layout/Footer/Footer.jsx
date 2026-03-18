import styles from './Footer.module.css';
import logo from '../../../assets/images/logo-colored.png';
import App from '../../../assets/images/Google.png';
import Google from '../../../assets/images/App.png';
import arrow from '../../../assets/icons/arrow.png';
import Flag from '../../../assets/images/Flag.png';
import facebook3 from '../../../assets/icons/facebook3.png';
import linkedin3 from '../../../assets/icons/linkedin3.png';
import twitter from '../../../assets/icons/twitter.png';
import youtube3 from '../../../assets/icons/youtube3.png';
import instagram3 from '../../../assets/icons/instagram3.png';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Logo + description */}
        <div className={styles.col}>
          <img src={logo} alt="Brand" className={styles.footerLogo} />
          <p className={styles.description}>
            Your trusted online shopping destination.<br />
            Quality products, fast delivery.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook3} alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagram3} alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className={styles.socialIcon} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={linkedin3} alt="Linkedin" className={styles.socialIcon} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={youtube3} alt="Youtube" className={styles.socialIcon} />
            </a>
            {/* Add more if you have (YouTube, LinkedIn, etc.) */}
          </div>
        </div>

        {/* Column 2: Company */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>About</h4>
          <ul className={styles.linkList}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find stores</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Partnership</h4>
          <ul className={styles.linkList}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find stores</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Information</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Money Returns</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>User</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">My Orders</a></li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Follow Us</h4>  {/* or keep "Follow Us" if you prefer */}

          <div className={styles.appBadges}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Google}
                alt="Get it on Google Play"
                className={styles.appBadge}
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={App}
                alt="Download on the App Store"
                className={styles.appBadge}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>© 2026 Ecommerce.</p>
        {/* <div className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div> */}

        <button className={styles.languageBtn}>
          <img
            src={Flag}
            alt="English"
            className={styles.languageFlag}
          />
          English
          <img
            src={arrow}
            alt=""
            className={styles.arrowIcon}
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;