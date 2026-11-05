import React from "react";

const ProductCard = ({ product, del }) => {
  return (
    <div className="p-4 border-2 flex flex-col gap-2 rounded">
      <div className="w-40">
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2 className="font-bold">{product.title.substring(0, 12)}</h2>
        <p className="text-xs">{product.category}</p>
        <p className="text-green-500">${product.price}</p>
      </div>
      <button
        onClick={() => {
          del(product.id);
        }}
        className="p-2 bg-red-400"
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
