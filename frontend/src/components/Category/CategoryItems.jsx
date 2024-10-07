import { useState, useMemo, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader, CardBody } from '@material-tailwind/react';
import { GiMedicines } from 'react-icons/gi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CiForkAndKnife } from 'react-icons/ci';
import { GiClothes } from 'react-icons/gi';
import { BiBed } from 'react-icons/bi';
import { FaGasPump } from 'react-icons/fa6';
import { FaGift } from 'react-icons/fa';
import { IoIosAirplane } from 'react-icons/io';
import { TbMoodKid } from 'react-icons/tb';
import { RiSafe2Line } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { CiCoinInsert } from 'react-icons/ci';
import { InputAmountContext } from '../Input/InputAmountContext';
import Modal from '../Modal';
import { changeBudgetAmount } from '../../store/budget/budgetSlice';

const CategoryItems = ({ category }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { value, setValue } = useContext(InputAmountContext);
  const userId = useSelector((state) => state.user.user._id);

  const categoryIcons = useMemo(
    () => ({
      '66ff1d8d45642290b0e121ea': (
        <FaGasPump className="p-1" size={48} aria-label="Fule" />
      ),
      '66ff1d8d45642290b0e121eb': (
        <FaGift className="p-1" size={48} aria-label="Gifts" />
      ),
      '66ff1d8d45642290b0e121ec': (
        <IoIosAirplane className="p-1" size={48} aria-label="Travel" />
      ),
      '66ff1d8d45642290b0e121ed': (
        <TbMoodKid className="p-1" size={48} aria-label="Kids" />
      ),
      '66ff1d8d45642290b0e121e6': (
        <CiForkAndKnife className="p-1" size={48} aria-label="Food & Drink" />
      ),
      '66ff1d8d45642290b0e121e5': (
        <MdOutlineLocalGroceryStore
          className="p-1"
          size={48}
          aria-label="Grocery"
        />
      ),
      '66ff1d8d45642290b0e121e7': (
        <GiClothes className="p-1" size={48} aria-label="Clothes" />
      ),
      '66ff1d8d45642290b0e121e8': (
        <BiBed className="p-1" size={48} aria-label="Hotel" />
      ),
      '66ff1d8d45642290b0e121e9': (
        <GiMedicines className="p-1" size={48} aria-label="Medicine" />
      ),
      '66ff1d8d45642290b0e121ef': (
        <RiSafe2Line className="p-1" size={48} aria-label="Rezerve" />
      ),
      '66ff1d8d45642290b0e121f0': (
        <GiReceiveMoney className="p-1" size={48} aria-label="Dividens" />
      ),
      '66ff1d8d45642290b0e121ee': (
        <FaRegMoneyBillAlt className="p-1" size={48} aria-label="Salary" />
      ),
      '66ff1d8d45642290b0e121f1': (
        <CiCoinInsert className="p-1" size={48} aria-label="Salary" />
      ),
    }),
    []
  );

  const categoryIcon = categoryIcons[category._id];

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const onSubmit = () => {
    if (value) {
      handleOpen();
      dispatch(changeBudgetAmount({ userId, category, amount: value }));
      setValue(0);
    }
  };

  return (
    <>
      <div onClick={handleOpen} variant="gradient">
        <Card className="flex-row mb-2 max-w-[16rem] p-5 hover:shadow-2xl">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 shrink-0 rounded-r-none"
          >
            {categoryIcon}
          </CardHeader>
          <CardBody className="p-0 flex items-center ml-2">
            <span className="font-bold">{category.category}</span>
          </CardBody>
        </Card>
      </div>

      {
        <Modal
          open={open}
          handleOpen={handleOpen}
          category={category}
          onSubmit={onSubmit}
        />
      }
    </>
  );
};

export default CategoryItems;
