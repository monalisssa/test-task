import styles from './styles.module.css';
import { ReactNode } from 'react';
const Button = ({ children, click }: { children: ReactNode; click?: () => void }) => {
  return (
    <button className={styles.button} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
