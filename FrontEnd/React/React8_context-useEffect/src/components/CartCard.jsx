import React from "react";

const CartCard = ({ product, onDelete }) => {
  return (
    <div className="flex items-center justify-between gap-6 rounded-2xl bg-gray-300 p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-24 w-24 shrink-0 object-contain rounded-lg bg-white p-2"
      />

      <div className="flex-1">
        <h1 className="font-medium text-xl text-gray-900">{product.title}</h1>
      </div>

      <h2 className="font-semibold text-xl">₹ {product.price}</h2>

      <button className="bg-gray-300 p-2 rounded-lg border border-gray-500">
        <span>+</span> <span className="bg-gray-100 p-2">{product.quantity}</span> <span>-</span>
      </button>

      <button
        onClick={onDelete}
        className="shrink-0 rounded-lg bg-red-600 p-2 text-white hover:bg-red-400"
      >
        Delete
      </button>
    </div>
  );
};

export default CartCard;
