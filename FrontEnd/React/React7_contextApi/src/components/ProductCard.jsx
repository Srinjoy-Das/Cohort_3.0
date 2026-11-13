
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const {
    title,
    price,
    description,
    category,
    image,
    rating,
  } = product;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-60 items-center justify-center bg-gray-50 p-6">
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-gray-500 shadow-sm">
          {category}
        </span>

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">

        <h2
          title={title}
          className="mb-2 line-clamp-2 min-h-12 text-base font-semibold text-gray-800"
        >
          {title}
        </h2>

        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-semibold text-gray-700">
            {rating?.rate?.toFixed(1) ?? "N/A"}
          </span>

          <span className="text-xs text-gray-400">
            ({rating?.count ?? 0} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <h3 className="text-xl font-bold text-gray-900">
            ₹{price.toFixed(2)}
          </h3>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
