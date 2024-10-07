import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { loginUser, resetErrors } from '../store/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import '../styles/login.css';

const Login = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    password: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    dispatch(resetErrors());

    if (errors) {
      const err = {};
      errors.forEach((error) => {
        err[error.path] = error.message;
      });

      setFormErrors(err);
    }
  }, [errors, dispatch]);

  const login = () => {
    dispatch(loginUser(user));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="box-content p-8 login border-2 border-solid border-gray-200 rounded shadow-2xl">
        <form>
          <div className="email flex flex-col mb-5">
            <label className="mb-1 text-sm">Email</label>
            <input
              className="p-2 border outline-none border-gray-300 focus:ring"
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="text-xs mt-1 text-red-500">
                {formErrors.email}
              </span>
            )}
          </div>
          <div className="password flex flex-col">
            <label className="mb-1 text-sm">Password</label>
            <input
              className="p-2 border outline-none border-gray-300 focus:ring"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <span className="text-xs mt-1 text-red-500">
                {formErrors.password}
              </span>
            )}
          </div>

          {formErrors.user && (
            <div className="mt-1 text-red-500 text-center">
              {formErrors.user}
            </div>
          )}

          <Button onClick={login} className="bg-blue-500 w-full mt-5">
            Login
          </Button>

          <div className="mt-5 text-center text-gray-500">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link className="text-blue-500" to="/signup">
                Sign Up Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
