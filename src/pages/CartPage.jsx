// src/components/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Toaster, toast } from "sonner";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.success("Item removed from cart");
  };

  const handleClear = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <Toaster position="top-center" />
        <p className="text-xl font-semibold">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <Toaster position="top-center" />
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-gray-800 font-semibold mt-1">${item.price * item.quantity}</p>
            <button
              onClick={() => handleRemove(item.id)}
              className="mt-3 bg-red-500 text-white py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <button
            onClick={handleClear}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
          >
            Clear Cart
          </button>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
