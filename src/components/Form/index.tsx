import { useState } from 'react';
import styles from './style.module.css';
import Button from '../UI/Button';
import Toast from '../UI/Toast';
import Loader from '../UI/Loader';
import useUserForm from '../../hooks/useForm';
import useToast from '../../hooks/useToast';

const Form = () => {
  const [userName, setUserName] = useState('');
  const { toggleToast, viewToast } = useToast();

  const resetForm = () => {
    setUserName('');
  };

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const { loading, error, handleSubmitForm } = useUserForm({ userName, toggleToast, resetForm });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form className={styles.loginForm} onSubmit={handleSubmitForm}>
          <h2>Sign Up</h2>
          <div className={styles.loginFormContent}>
            <input
              placeholder="Username Text Field"
              className={styles.loginFormInput}
              value={userName}
              onChange={handleChangeUsername}
              required
            />
            <Button>Send Button</Button>
          </div>
        </form>
      )}

      {viewToast && <Toast toggleToast={toggleToast}>{error}</Toast>}
    </>
  );
};

export default Form;
