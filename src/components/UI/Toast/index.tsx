import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.css';
interface ToastProps {
  children: ReactNode;
  toggleToast: (value: boolean) => void;
}

const Toast: FC<ToastProps> = ({ children, toggleToast }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      toggleToast(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [toggleToast]);

  return <>{visible && <div className={styles.toastWrapper}>{children}</div>}</>;
};

export default Toast;
