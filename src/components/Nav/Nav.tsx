import styles from './Nav.module.scss';

function Nav() {
  return (
    <div className={styles['nav']}>
      <div className={styles['logo']}>Colt Social</div>

      <div className={styles['nav-right']}>
        <div className={styles['nav-link']}>Dashboard</div>
        <div className={styles['nav-link']}>Info</div>
        <div className={styles['nav-link']}>Pricing</div>
        <div className={styles['nav-button']}>Unlock</div>
      </div>
    </div>
  );
}

export default Nav;
