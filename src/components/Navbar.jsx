import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ onClick }) => (
    <>
      <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium" onClick={onClick}>
        Home
      </Link>
      <Link to="/restaurants" className="text-gray-700 hover:text-orange-500 font-medium" onClick={onClick}>
        Restaurants
      </Link>
      <Link to="/cart" className="flex items-center text-gray-700 hover:text-orange-500 font-medium" onClick={onClick}>
        <ShoppingCart className="w-5 h-5 mr-1" /> Cart
      </Link>
      <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 font-semibold" onClick={onClick}>
        Login
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-orange-500">FoodieOrder</Link>

        <div className="hidden md:flex space-x-8 items-center">
          <NavLinks />
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}
