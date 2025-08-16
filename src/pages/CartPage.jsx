import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + parseInt(item.price.replace(/\D/g, "")) * item.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item, i) => (
              <li key={i} className="flex items-center justify-between bg-white shadow p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.name, parseInt(e.target.value))}
                    className="w-16 border rounded p-1 text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center border-t pt-6">
            <p className="text-xl font-bold">Total: Rs. {total}</p>
            <div className="space-x-3">
              <button onClick={clearCart} className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">
                Clear Cart
              </button>
              <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
