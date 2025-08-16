import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import pizzaImage from "../images/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg";
import burgerImage from "../images/burger.png";
import biryaniImage from "../images/Biryani.png";
import sushiImage from "../images/Sushi.png";
import dessertsImage from "../images/Desserts.png";

import pizzaHouse from "../images/pizzaHouse.png";
import biryaniPoint from "../images/biryaniPoint.png";
import sushiWorld from "../images/sushiWorld.png";

const categories = [
  { name: "Pizza", img: pizzaImage },
  { name: "Burgers", img: burgerImage },
  { name: "Biryani", img: biryaniImage },
  { name: "Sushi", img: sushiImage },
  { name: "Desserts", img: dessertsImage },
];

const restaurants = [
  { id: 1, name: "Pizza House", cuisine: "Italian", img: pizzaHouse },
  { id: 2, name: "Biryani Point", cuisine: "Pakistani", img: biryaniPoint },
  { id: 3, name: "Sushi World", cuisine: "Japanese", img: sushiWorld },
];

export default function Home() {
  return (
    <div>
      <section className="bg-orange-500 text-white py-20 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Delicious Food Delivered <br /> Right at Your Doorstep
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Browse restaurants near you and enjoy your favorite meals in minutes with FoodieOrder.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 sm:p-4 text-center">
              <img src={cat.img} alt={cat.name} className="w-full h-24 sm:h-28 object-cover rounded-lg mb-3 sm:mb-4" />
              <h3 className="font-semibold text-sm sm:text-base">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Popular Restaurants</h2>
            <Link to="/restaurants" className="text-orange-600 hover:underline text-sm sm:text-base">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {restaurants.map((res) => (
              <Link
                to={`/restaurant/${res.id}`}
                key={res.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition block focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <img src={res.img} alt={res.name} className="w-full h-40 sm:h-48 object-cover rounded-t-xl" />
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-bold">{res.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{res.cuisine}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
