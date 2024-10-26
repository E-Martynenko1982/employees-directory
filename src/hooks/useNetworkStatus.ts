import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { setOnline, setOffline } from '../redux/connectionSlice';

const useNetworkStatus = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleOnline = () => dispatch(setOnline());
    const handleOffline = () => dispatch(setOffline());

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (navigator.onLine) {
      dispatch(setOnline());
    } else {
      dispatch(setOffline());
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [dispatch]);
};

export default useNetworkStatus;
