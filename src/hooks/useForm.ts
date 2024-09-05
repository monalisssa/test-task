import { FormEvent, useEffect } from 'react';
import { clearUser } from '../store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchUser } from '../store/actions/userActions';
import { useNavigate } from 'react-router-dom';

interface UseUserFormProps {
  userName: string;
  toggleToast: (value: boolean) => void;
  resetForm: () => void;
}

const useUserForm = ({ userName, toggleToast, resetForm }: UseUserFormProps) => {
  const dispatch = useAppDispatch();
  const { user, error, loading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClearUser = () => {
    dispatch(clearUser());
    resetForm();
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClearUser();
    dispatch(fetchUser(userName));
  };

  useEffect(() => {
    if (error) {
      toggleToast(true);
    } else if (user) {
      navigate('/');
    }
  }, [error, user, navigate]);

  return {
    loading,
    handleSubmitForm,
    error,
  };
};

export default useUserForm;
