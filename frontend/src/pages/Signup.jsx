import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { signupUser, resetErrors } from '../store/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import '../styles/login.css';

const Signup = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    username: '',
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

  const signup = (e) => {
    e.preventDefault();
    dispatch(signupUser(user));
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
          <div className="username flex flex-col mb-5">
            <label className="mb-1 text-sm">Username</label>
            <input
              className="p-2 border outline-none border-gray-300 focus:ring"
              type="text"
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
            {formErrors.username && (
              <span className="text-xs mt-1 text-red-500">
                {formErrors.username}
              </span>
            )}
          </div>
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

          <Button onClick={signup} className="bg-blue-500 w-full mt-5">
            SIGN UP
          </Button>

          <div className="mt-5 text-center text-gray-500">
            <p className="text-sm">
              Already have an account?{' '}
              <Link className="text-blue-500" to="/login">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
