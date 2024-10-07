import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/user/userSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setUser(token));
    }
    setLoading(false);
  }, [dispatch]);

  return { isAuthenticated, loading };
};

export default useAuth;
