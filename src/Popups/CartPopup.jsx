import { useState } from "react";
import "../styles/CartPopup.css";
import "../styles/font.css"
import BurgerImg from "../assets/beef.png";
import CartSidebar from "../Popups/CartSidebar";
import Arrow from "../assets/drop-arrow.png";

export default function CartPopup({ onClose }) {
  const [qty, setQty] = useState(2);
  const [selectedMeal, setSelectedMeal] = useState(1);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => qty > 1 && setQty(qty - 1);

  const [openCart, setOpenCart] = useState(false);

  // ✅ NEW STATE FOR ADD-ONS
  const [openAddons, setOpenAddons] = useState(false);
  const [openMeal, setOpenMeal] = useState(false);

  return (
    <div className="cart-overlay">
      <div className="cart-container">

        {/* LEFT IMAGE */}
        <div className="cart-left">
          <img src={BurgerImg} alt="burger" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="cart-right">

          <div className="cart-body">
            <button className="close-btn" onClick={onClose}>×</button>

            <h2 className="regular">Classic Beef Smash</h2>
            <h3 className="regular">Rs. 728</h3>

            <p className="desc sans">
              A smashed beef patty topped with melted cheese, caramelized onions,
              and our homemade sauce for a smooth, balanced kick.
            </p>

            {/* MAKE IT A MEAL */}
            <div style={{ marginTop: '24px' }}>
              <div className={`option-box ${openMeal ? "active" : ""}`}>
                <div className="option-header" onClick={() => setOpenMeal(!openMeal)}>
                  <span className="regular">Make it a meal</span>

                  <div className="addon-right">
                    <span className="tag required regular">Required</span>
                    <span className={`arrow ${openMeal ? "rotate" : ""}`}>
                      <img src={Arrow} alt="Arrow" />
                    </span>
                  </div>

                </div>

                {openMeal &&
                  <div className="option-content">
                    {[1, 2, 3].map((item) => (
                      <label key={item} className="radio-item">
                        <span className="sans">Make it a meal</span>
                        <input
                          type="radio"
                          name="meal"
                          checked={selectedMeal === item}
                          onChange={() => setSelectedMeal(item)}
                        />
                        <span className="custom-radio"></span>
                      </label>
                    ))}
                  </div>
                }
              </div>
            </div>

            {/* ✅ ADD ONS (ACCORDION ADDED) */}
            <div className={`option-box ${openAddons ? "active" : ""}`}>
              <div
                className="option-header"
                onClick={() => setOpenAddons(!openAddons)}
              >
                <span className="regular">Add-ons</span>

                <div className="addon-right">
                  <span className="tag required regular">Optional</span>

                  <span className={`arrow ${openAddons ? "rotate" : ""}`}>
                    <img src={Arrow} alt="Arrow" />
                  </span>
                </div>
              </div>

              {openAddons && (
                <div className="option-content">
                  {/* Example Add-ons */}
                  {[1, 2, 3].map((item) => (
                    <label key={item} className="item">
                      <p className="sans">Extra Cheese</p>
                      <div className="addon-price">
                        <span className="sans">+Rs. 395.00</span>
                        <input type="checkbox" className="custom-checkbox" />
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* INSTRUCTIONS */}
            <div className="instructions">
              <h4 className="regular">Special Instructions</h4>
              <p className="sans">Any special requests are subject to approval.</p>
              <textarea className="sans" placeholder="Write here..." />
            </div>

          </div>

          {/* FOOTER */}
          <div className="cart-footer">
            <div className="qty-box">
              <button onClick={decreaseQty}>−</button>
              <span className="regular">{qty}</span>
              <button onClick={increaseQty}>+</button>
            </div>

            <button className="add-btn regular" onClick={() => setOpenCart(true)}>
              Rs. {728 * qty}
              <p className="regular">Add To Cart</p>
            </button>

            <CartSidebar
              show={openCart}           // ✅ pass show prop
              isOpen={openCart}         // ✅ keep your existing prop for CSS
              onClose={() => setOpenCart(false)} // close function
              onCheckout={() => alert("Checkout clicked")} // example checkout
            />
          </div>
        </div>
      </div>
    </div>
  );
}