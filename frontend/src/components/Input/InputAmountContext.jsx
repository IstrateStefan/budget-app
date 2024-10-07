import { createContext, useState } from 'react';

export const InputAmountContext = createContext();

const InputAmountProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <InputAmountContext.Provider value={{ value, setValue }}>
      {children}
    </InputAmountContext.Provider>
  );
};

export default InputAmountProvider;
