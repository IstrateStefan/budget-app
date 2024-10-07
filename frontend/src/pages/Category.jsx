import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryItems from '../components/Category/CategoryItems';
import CategoryType from '../components/Category/CategoryType';
import InputAmountProvider from '../components/Input/InputAmountContext';

const Category = () => {
  const categories = useSelector((state) => state.category.categories);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [type, setType] = useState('Expense');

  useEffect(() => {
    const filtered = categories.filter((category) => category.type === type);

    setFilteredCategories(filtered);
  }, [type, categories]);

  return (
    <InputAmountProvider>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-2/5">
          <CategoryType type={type} setType={setType} />
        </div>

        <div className="grid grid-cols-2 gap-x-2.5 grid-y-1.5 w-2/5 cursor-pointer">
          {filteredCategories.map((category) => (
            <CategoryItems key={category.category} category={category} />
          ))}
        </div>
      </div>
    </InputAmountProvider>
  );
};

export default Category;
