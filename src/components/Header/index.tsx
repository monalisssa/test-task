import { memo, useCallback } from 'react';
import styles from './styles.module.css';
import Button from '../UI/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { clearUser } from '../../store/reducers/userSlice';
import { ROUTES } from '../../constants/routes';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleClick = useCallback(() => {
    if (user) {
      dispatch(clearUser());
    } else {
      navigate(`/login`);
    }
  }, [dispatch, user]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <NavLink to={ROUTES.HOME}>
          <h3>Best Application</h3>
        </NavLink>

        <Button click={handleClick}>{user ? 'Log Out' : ' Sign in'}</Button>
      </div>
    </header>
  );
};

export default memo(Header);
