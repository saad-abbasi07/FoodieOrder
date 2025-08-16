// uses your image files so everything matches your previous code
import pizzaDish from '../images/cover.png';
import cheesaPiza from '../images/cheesePizza.png';
import veggiePizza from '../images/veggiePizza.png';
import biryaniDish from '../images/chickenBiryani.png';
import sushiDish from '../images/Sushi.png';
import muttonBiryani from '../images/muttonBiryani.png';
import beefBiryani from '../images/beefBiryani.png';
import tunaSushi from '../images/tunaSushi.png';
import salmonSushi from '../images/salmonSushi.png';

const restaurantData = [
  {
    id: 1,
    name: "Pizza House",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: "Free Delivery",
    img: pizzaDish,
    dishes: [
      { name: "Pepperoni Pizza", price: "Rs. 650", img: pizzaDish },
      { name: "Cheese Pizza", price: "Rs. 550", img: cheesaPiza },
      { name: "Veggie Pizza", price: "Rs. 600", img: veggiePizza },
    ],
  },
  {
    id: 2,
    name: "Biryani Point",
    cuisine: "Pakistani",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: "Rs. 50",
    img: biryaniDish,
    dishes: [
      { name: "Chicken Biryani", price: "Rs. 350", img: biryaniDish },
      { name: "Mutton Biryani", price: "Rs. 500", img: muttonBiryani },
      { name: "Beef Biryani", price: "Rs. 450", img: beefBiryani },
    ],
  },
  {
    id: 3,
    name: "Sushi World",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "40-50 min",
    deliveryFee: "Rs. 100",
    img: sushiDish,
    dishes: [
      { name: "Salmon Sushi", price: "Rs. 700", img: salmonSushi },
      { name: "Tuna Sushi", price: "Rs. 750", img: tunaSushi },
      { name: "Veg Sushi", price: "Rs. 650", img: sushiDish },
    ],
  },
];

export default restaurantData;
