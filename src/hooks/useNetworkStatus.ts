import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { setOnline, setOffline } from '../redux/connectionSlice';

const useNetworkStatus = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleOnline = () => dispatch(setOnline());
    const handleOffline = () => dispatch(setOffline());

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [dispatch]);
};

export default useNetworkStatus;
