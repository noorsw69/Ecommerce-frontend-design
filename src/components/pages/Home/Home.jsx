import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Banner from '../../../assets/images/Banner.png';
import headphones from '../../../assets/images/headphones.png';
import tablet from '../../../assets/images/tablet.png';
import headphone2 from '../../../assets/images/headphone2.png';
import electrickettle from '../../../assets/images/electrickettle.png';
import samsung from '../../../assets/images/samsung.png';
import smartwatch from '../../../assets/images/smartwatch.png';
import smartphone from '../../../assets/images/smartphone.png';
import laptop from '../../../assets/images/laptop.png';
import service1 from '../../../assets/images/service1.png';
import service2 from '../../../assets/images/service2.png';
import service3 from '../../../assets/images/service3.png';
import service4 from '../../../assets/images/service4.png';
import home from '../../../assets/images/home.png';
import pot from '../../../assets/images/pot.png';
import lamp from '../../../assets/images/lamp.png';
import tree from '../../../assets/images/tree.png';
import coffe from '../../../assets/images/coffe.png';
import juicer from '../../../assets/images/juicer.png';
import sofa from '../../../assets/images/sofa.png';
import chair from '../../../assets/images/chair.png';
import grid1 from '../../../assets/images/grid1.png';
import grid2 from '../../../assets/images/grid2.png';


const Home = () => {
  const regions = [
    { name: "Arabic Emirates", url: "shopname.ae", code: "ae" },
    { name: "Australia", url: "shopname.ae", code: "au" },
    { name: "United States", url: "shopname.ae", code: "us" },
    { name: "Russia", url: "shopname.ru", code: "ru" },
    { name: "Italy", url: "shopname.it", code: "it" },
    { name: "Denmark", url: "denmark.com.dk", code: "dk" },
    { name: "France", url: "shopname.com.fr", code: "fr" },
    { name: "Arabic Emirates", url: "shopname.ae", code: "ae" },
    { name: "China", url: "shopname.ae", code: "cn" },
    { name: "Great Britain", url: "shopname.co.uk", code: "gb" },
  ];
  return (

    <main className={styles.home}>
      <div className={styles.sectionCard}>
        <div className={styles.bannerLayout}>

          <aside className={styles.sidebar}>
            <ul className={styles.categoryList}>
              <li><Link to="/ProductsList/Tech" className={styles.categoryLink}>Tech</Link></li>
              <li><Link to="/ProductsList/clothes" className={styles.categoryLink}>Clothes</Link></li>
              <li><Link to="/ProductsList/interior" className={styles.categoryLink}>Interior</Link></li>
              <li><Link to="/ProductsList/All Categories" className={styles.categoryLink}>All Categories</Link></li>
              <li><Link to="/ProductsList/clothes" className={styles.categoryLink}>Clothes</Link></li>
              <li><Link to="/ProductsList/interior" className={styles.categoryLink}>Interior</Link></li>
              <li><Link to="/ProductsList/Tech" className={styles.categoryLink}>Tech</Link></li>
              <li><Link to="/ProductsList/clothes" className={styles.categoryLink}>Clothes</Link></li>
              <li><Link to="/ProductsList/interior" className={styles.categoryLink}>Interior</Link></li>
              <li><Link to="#" className={styles.categoryLink}>More...</Link></li>
            </ul>
          </aside>

          <div className={styles.banner}>
            <div className={styles.bannerContainer}>
              <img
                src={Banner}
                alt=""
                className={styles.bannerBgImage}
                aria-hidden="true"
              />
              <div className={styles.bannerOverlay}>
                <h2 className={styles.bannerTitle}>Latest trending</h2>
                <h2 className={styles.bannerSubtitle}>Electronic items</h2>
                <button className={styles.bannerBtn}>Learn more</button>
              </div>
            </div>
          </div>

          <div className={styles.bannerRight}>

            <div className={styles.greetingBox}>
              <div className={styles.greetingHeader}>
                <span className={styles.userIcon}>👤</span>
                <div className={styles.greetingText}>
                  <p>Hi, user</p>
                  <p>let's get started</p>
                </div>
              </div>
              <button className={styles.joinBtn}>Join now</button>
              <button className={styles.loginBtn}>Log in</button>
            </div>


            <div className={styles.offerBoxOrange}>
              <p>Get US $10 off</p>
              <p>with a new supplier</p>
            </div>


            <div className={styles.offerBoxTeal}>
              <p>Send quotes with</p>
              <p>supplier preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionCard}>
        <div className={styles.categoryProductLayout}>
          <div className={styles.categorySidebar}>
            <img src={grid1} alt="" className={styles.categoryBgImg} />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>Home and outdoor</h3>
              <button className={`${styles.sourceBtn} ${styles.hideMobile}`}>Source now</button>
            </div>
          </div>
          <div className={styles.categoryGrid}>
            <Link to="/product/17" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Soft chairs</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={chair} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/16" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Sofa</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={sofa} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/13" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>lamp</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={lamp} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/12" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Tree</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={tree} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/10" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Pot</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={pot} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/14" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Coffee</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={coffe} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/11" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Juicer</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={juicer} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/15" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Home</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={home} alt="" className={styles.smallProductImg} />
              </div>
            </Link>
          </div>
          <button className={`${styles.sourceBtn} ${styles.showMobileOnly}`}>
            Source now →
          </button>
        </div>
      </div>

      <div className={styles.sectionCard}>
        <div className={styles.categoryProductLayout}>
          <div className={styles.categorySidebar}>
            <img src={grid2} alt="" className={styles.categoryBgImg} />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>Consumer electronics</h3>
              <button className={`${styles.sourceBtn} ${styles.hideMobile}`}>Source now</button>
            </div>
          </div>
          <div className={styles.categoryGrid}>
            <Link to="/product/4" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>laptop</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={laptop} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/2" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>smartphone</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={smartphone} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/8" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>headphones</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={headphone2} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/9" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>headphones</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={headphones} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/5" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>tablet</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={tablet} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/3" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Smartwatch</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={smartwatch} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/6" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Electric kettle</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={electrickettle} alt="" className={styles.smallProductImg} />
              </div></Link>
            <Link to="/product/1" className={styles.cardLink}>
              <div className={styles.smallProductCard}>
                <div className={styles.productInfo}>
                  <p className={styles.smallProductName}>Samsung</p>
                  <p className={styles.smallProductPrice}>From USD 19</p>
                </div>
                <img src={samsung} alt="" className={styles.smallProductImg} />
              </div></Link>
          </div>
          <button className={`${styles.sourceBtn} ${styles.showMobileOnly}`}>
            Source now →
          </button>
        </div>
      </div>
      <div className={styles.sectionCard}>
        <div className={styles.bottomCta}>
          <h3 className={styles.ctaTitle}>An easy way to send request to all suppliers</h3>
          <p className={styles.ctaDescription}>Send quote to suppliers. What do you need?</p>
          <form className={styles.ctaForm}>
            <input
              type="text"
              placeholder="What do you need?"
              className={styles.ctaInput}
            />
            <button type="submit" className={styles.ctaButton}>Send quote</button>
          </form>
        </div>
      </div>
      {/* Extra Services Section */}
      <div className={styles.sectionCard}>
        <div className={styles.servicesSection}>
          <h3 className={styles.sectionTitle}>Our extra services</h3>

          <div className={styles.servicesGrid}>
            {/* Array of service data */}
            {[
              { title: "Source from Industry Hubs", icon: "🔍", img: service1 },
              { title: "Customize Your Products", icon: "📦", img: service2 },
              { title: "Fast, reliable shipping by ocean or air", icon: "✈️", img: service3 },
              { title: "Product monitoring and inspection", icon: "🛡️", img: service4 },
            ].map((service, index) => (
              <div key={index} className={styles.serviceCard}>

                <div className={styles.serviceImgWrapper}>
                  <img src={service.img} alt="" className={styles.serviceImg} />
                  <div className={styles.serviceIcon}>{service.icon}</div>
                </div>

                {/* Bottom part: Text description */}
                <div className={styles.serviceBody}>
                  <p className={styles.serviceText}>{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sectionCard}>
        <div className={styles.regionSection}>
          <h3 className={styles.sectionTitle}>Suppliers by region</h3>

          <div className={styles.regionGrid}>
            {regions.map((region, index) => (
              <div key={index} className={styles.regionItem}>
                {/* Flag Image */}
                <img
                  src={`https://flagcdn.com/w40/${region.code}.png`}
                  alt={`${region.name} flag`}
                  className={styles.regionFlag}
                />

                {/* Text Info */}
                <div className={styles.regionInfo}>
                  <p className={styles.regionName}>{region.name}</p>
                  <p className={styles.regionUrl}>{region.url}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </main>
  );
};

export default Home;