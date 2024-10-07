import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RedirectIfAuthenticated = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default RedirectIfAuthenticated;
