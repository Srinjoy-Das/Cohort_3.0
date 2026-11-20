import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import CartScreen from "./pages.jsx/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { isCartOpen, setAddCartItems, addCartItems } = useContext(MyStore);

  const [productData, setProductData] = useState([]);
  const onHandleDelete = (indexToDelete) => {
    setAddCartItems((prev) =>
      prev.filter((_, index) => index !== indexToDelete),
    );
  };

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="p-2 h-screen flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="h-screen">
          <CartScreen onDeleteItem={onHandleDelete} />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {productData.map((elem) => {
            let isInCart = addCartItems.find((val) => val.id === elem.id);
            return (
              <ProductCard key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
