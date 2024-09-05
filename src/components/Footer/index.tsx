import { memo } from 'react';
import styles from './style.module.css';
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContent}>
        <a href="https://t.me/Lisavetta0">Telegram</a>
        <a href="https://github.com/monalisssa">Github</a>
      </div>
    </footer>
  );
};

export default memo(Footer);
