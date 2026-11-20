import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { setAddCartItems, incrementCart, decrementCart } = useContext(MyStore);

  const addToCart = () => {
    setAddCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-60 items-center justify-center bg-gray-50 p-6">
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-gray-500 shadow-sm">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="mb-2 line-clamp-2 min-h-12 text-base font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-semibold text-gray-700">
            {product.rating?.rate}
          </span>

          <span className="text-xs text-gray-400">
            ({product.rating?.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <h3 className="text-xl font-bold text-gray-900">₹ {product.price}</h3>

          {isInCart ? (
            <div className="flex items-center gap-3 rounded-lg border border-gray-500 bg-gray-300 p-2">
              <button className="cursor-pointer hover:-translate-y-0.5 duration-100" onClick={() => decrementCart(product.id)}>−</button>

              <span className="px-3 py-1">{isInCart.quantity}</span>

              <button className="cursor-pointer hover:-translate-y-0.5 duration-100" onClick={() => incrementCart(product.id)}>+</button>
            </div>
          ) : (
            <button
              type="button"
              onClick={addToCart}
              className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
