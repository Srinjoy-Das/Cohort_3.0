import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Cart = () => {
  let { cart, setToggle, setCart } = useContext(MyStore);
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl p-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Your Cart ({cart.length})
        </h1>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-700"
        >
          Continue Shopping
        </button>
      </div>

      {/* Cart Products */}
      {cart.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-xl font-semibold text-gray-600">
            Your cart is empty!
          </h2>
          <p className="mt-2 text-gray-400">
            Add some products to get started.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {cart.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex flex-col items-center gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-28 w-28 object-contain"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold text-gray-800">{product.title}</h2>

                <p className="mt-2 text-sm capitalize text-gray-400">
                  {product.category}
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </h3>
              <button
                onClick={() =>
                  setCart((prev) => prev.filter((_, i) => i !== index))
                }
                className="bg-red-500 p-2 rounded text-white cursor-pointer hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Total</h2>
            <h2 className="text-2xl font-bold text-green-600">
              ${total.toFixed(2)}
            </h2>
          </div>
          <button className="bg-amber-600 p-2 rounded text-white cursor-pointer hover:bg-amber-400 text-xl">
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
