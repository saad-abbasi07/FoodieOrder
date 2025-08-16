import { useNavigate } from "react-router-dom";
import restaurantData from "../data/restaurantData";
import Footer from "../components/Footer";

export default function RestaurantsPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-16">
      <h1 className="text-4xl font-extrabold mb-12 text-center">All Restaurants</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {restaurantData.map((res) => (
          <div
            key={res.id}
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/restaurant/${res.id}`)}
            onKeyDown={(e) => (e.key === "Enter" ? navigate(`/restaurant/${res.id}`) : null)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500"
          >
            <img
              src={res.img}
              alt={res.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{res.name}</h3>
              <p className="text-gray-700 text-lg">{res.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
