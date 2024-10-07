import { TabsHeader, Tab, Tabs } from '@material-tailwind/react';

const CategoryType = ({ type, setType }) => {
  return (
    <Tabs value={type} className="overflow-visible mb-10">
      <TabsHeader className="relative z-0 ">
        <Tab value="Expense" onClick={() => setType('Expense')}>
          Expense
        </Tab>
        <Tab value="Income" onClick={() => setType('Income')}>
          Income
        </Tab>
      </TabsHeader>
    </Tabs>
  );
};

export default CategoryType;
