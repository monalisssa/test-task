import { useState } from 'react';

const useToast = () => {
  const [viewToast, setViewToast] = useState(false);
  const toggleToast = (value: boolean) => setViewToast(value);

  return {
    viewToast,
    toggleToast,
  };
};

export default useToast;
