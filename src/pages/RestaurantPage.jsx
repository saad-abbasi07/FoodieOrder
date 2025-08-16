import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import restaurantData from "../data/restaurantData";

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurantId = Number(id);
  const restaurant = restaurantData.find((r) => Number(r.id) === restaurantId);
  const { addToCart } = useCart();

  if (!restaurant) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="mb-6 text-lg">Restaurant not found.</p>
        <Link to="/restaurants" className="text-orange-600 hover:underline">Back to Restaurants</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img src={restaurant.img} alt={restaurant.name} className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 bg-white/90 p-6 rounded-xl shadow-lg max-w-lg">
          <h1 className="text-4xl font-bold">{restaurant.name}</h1>
          <p className="text-gray-600">{restaurant.cuisine}</p>
          {restaurant.rating && (
            <p className="mt-2 text-gray-700">
              ⭐ {restaurant.rating} • {restaurant.deliveryTime} • {restaurant.deliveryFee}
            </p>
          )}
          <Link to="/restaurants" className="inline-block mt-3 text-orange-600 hover:underline">
            ← Back to Restaurants
          </Link>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {restaurant.dishes.map((dish, i) => (
              <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <img src={dish.img} alt={dish.name} className="w-full h-40 object-cover rounded-t-xl" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{dish.name}</h3>
                  <p className="text-gray-700">{dish.price}</p>
                  <button
                    onClick={() => addToCart(dish)}
                    className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
