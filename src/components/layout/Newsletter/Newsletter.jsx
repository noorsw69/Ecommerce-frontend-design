import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>Subscribe to our Newsletter</h3>
          <p className={styles.description}>
            Get news on upcoming offers from many suppliers all over the world.
          </p>
        </div>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
            className={styles.emailInput}
            required
          />
          <button type="submit" className={styles.subscribeBtn}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;