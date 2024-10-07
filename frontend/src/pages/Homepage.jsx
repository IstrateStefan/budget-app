import { useEffect } from 'react';
import { getBudget } from '../store/budget/budgetSlice';
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user._id);
  const budget = useSelector((state) => state.budget.budget);

  useEffect(() => {
    dispatch(getBudget(userId));
  }, [dispatch, userId]);

  return <div>Total Amount: {budget?.totalAmount}</div>;
};

export default Homepage;
