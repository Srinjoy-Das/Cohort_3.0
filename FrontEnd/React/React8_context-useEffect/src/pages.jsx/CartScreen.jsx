import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MyStore } from "../context/MyContext";

const CartScreen = ({ onDeleteItem }) => {

  let {addCartItems} = useContext(MyStore);

  return (
    <div className="flex flex-col gap-2">
      {addCartItems.length === 0 ? (
        <h1 className="text-center text-2xl font-semibold">
          Your cart is empty. Continue Shopping!
        </h1>
      ) : (
        addCartItems.map((elem, index) => {
          return <CartCard key={`${elem.id}-${index}`} product={elem} onDelete={() => onDeleteItem(index)} />;
        })
      )}
    </div>
  );
};

export default CartScreen;
