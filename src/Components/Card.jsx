import Heart from "../assets/heart.png";
import Plus from "../assets/plus.png";
import "../styles/font.css";

export default function Card({ item, onAddToCart }) {
  return (
    <div className="card">
      {/* Left Image */}
      <div className="card-img">
        <img src={item.img} alt={item.title} />
      </div>

      {/* Right Content */}
      <div className="card-content">
        <h3 className="regular">{item.title}</h3>

        {/* ✅ Dynamic description (NO HARDCODE) */}
        <p className="sans">
          {item.desc || "No description available"}
        </p>

        {/* Price */}
        <div className="price regular">Rs. {item.price}</div>

        {/* Actions */}
        <div className="card-actions">
          <button
            onClick={() => onAddToCart(item)}
            className="regular"
          >
            <img src={Plus} alt="Plus" style={{ marginTop: '-3px' }} />
            Add To Cart
          </button>

          <img src={Heart} alt="Heart" className="heart" />
        </div>
      </div>
    </div>
  );
}