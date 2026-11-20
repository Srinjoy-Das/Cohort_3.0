import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addCartItems, setAddCartItems] = useState([]);
  console.log(addCartItems);

  const incrementCart = (id) => {
    setAddCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementCart = (id) => {
    setAddCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
      }).filter((val) => val.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        addCartItems,
        setAddCartItems,
        incrementCart,
        decrementCart,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
