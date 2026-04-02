import Card from "./Card";
import "../styles/Card.css";
import Burger1 from "../assets/classic beef.png";
import Burger2 from "../assets/double premium.png";
import Burger3 from "../assets/rustic beef.png";
import Burger4 from "../assets/monster.png";
import Burger5 from "../assets/crispy.png";
import Burger6 from "../assets/RedHeat.png";
import Burger7 from "../assets/K-Chili Crunch.png";
import Burger8 from "../assets/Melt Burger.png";
import Wrap1 from "../assets/classic wrap.png";
import Bowl1 from "../assets/rice bowl.png";
import fries1 from "../assets/chicken strips.png";
import fries2 from "../assets/loaded fries.png";
import Wings1 from "../assets/wings.png";
import Sauce1 from "../assets/SAUCES.png";
import water1 from "../assets/soft drink.png";
import water2 from "../assets/water.png";

const data = [
  { title: "Classic Beef Smash", price: 728, img: Burger1 },
  { title: "Double Premium Smash", price: 1098, img: Burger2 },
  { title: "Rustic Beef Ragu Burger", price: 1195, img: Burger3 },
  { title: "The Monster Smash", price: 1950, img: Burger4 },
];

const data2 = [

  { title: "Crispy Street Zing Burger", price: 695, img: Burger5 },
  { title: "RedHeat Crunch Chicken", price: 895, img: Burger6 },
  { title: "K-Chili Crunch", price: 895, img: Burger7 },
  { title: "Chicken Melt Burger", price: 795, img: Burger8 },
];

const data3 = [

  { title: "Crispy Street Zing Wrap", price: 895, img: Wrap1 },
  { title: "RedHeat Crunch Wrap", price: 895, img: Wrap1 },
];

const data4 = [

  { title: "Classic Beef Smash", price: 895, img: Bowl1 },
  { title: "Double Premium Smash", price: 895, img: Bowl1 },
  { title: "Rustic Beef Ragu", price: 895, img: Bowl1 },
];

const data5 = [

  { title: "Chicken Strips", price: 685, img: fries1 },
  { title: "K-Chicken Strips", price: 680, img: fries1 },
  { title: "Masala Fries", price: 495, img: fries2 },
  { title: "Loaded Fries", price: 795, img: fries2 },
];

const data6 = [

  { title: "Spicy Injected Wings", price: 795, img: Wings1 },
  { title: "6 Pcs Wings", price: 695, img: Wings1 },
  { title: "10 Pcs Wings", price: 985, img: Wings1 },
];

const data7 = [

  { title: "Original Mayo", price: 70, img: Sauce1 },
  { title: "Garlic Mayo", price: 70, img: Sauce1 },
  { title: "Jalapeno Sauce", price: 70, img: Sauce1 },
  { title: "Chipotle Sauce", price: 70, img: Sauce1 },
  { title: "Peri-Peri Sauce", price: 70, img: Sauce1 },
  { title: "Siracha Sauce", price: 70, img: Sauce1 },
  { title: "Chili Garlic Sauce", price: 70, img: Sauce1 },
  { title: "Honey Mustard Sauce", price: 70, img: Sauce1 },
];

const data8 = [

  { title: "Fries Regular", price: 70, img: fries1 },
  { title: "Masala Fries", price: 70, img: fries1 },
  { title: "Garlic Mayo Fries", price: 70, img: fries2 },
  { title: "Extra Patty (Beef)", price: 70, img: fries1 },
  { title: "Extra Chicken Fillet", price: 70, img: fries1 },
  { title: "Extra Cheese Slice", price: 70, img: fries2 },
];

const data9 = [

  { title: "Soft Drink", price: 140, img: water1 },
  { title: "Plain Water", price: 100, img: water2 },
];

export default function MenuSection({ onAddToCart }) {
  return (

    <div className="ths-menu">

      <h3 className="regular">BEEF BURGER</h3>
      <div className="ths-submenu">
        {data.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">CHICKEN BURGER</h3>
      <div className="ths-submenu">
        {data2.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">WRAP</h3>
      <div className="ths-submenu">
        {data3.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">ARABIAN RICE BOWLS & SALADS</h3>
      <div className="ths-submenu">
        {data4.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">STARTERS</h3>
      <div className="ths-submenu">
        {data5.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">WINGS</h3>
      <div className="ths-submenu">
        {data6.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">SIGNATURE SAUCES</h3>
      <div className="ths-submenu">
        {data7.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">ADD-ONS</h3>
      <div className="ths-submenu">
        {data8.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

      <h3 className="regular">ADD-ONS</h3>
      <div className="ths-submenu">
        {data9.map((item, i) => (
          <Card key={i} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>

    </div>
  );
}