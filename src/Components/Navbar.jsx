import { useState } from "react";
import "../styles/style.css";
import Logo from "../assets/logo.png";
import Map from "../assets/map-pin.png";
import Phone from "../assets/phone.png";
import Cart from "../assets/cart.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import CartSidebar from "../Popups/CartSidebar";

export default function Navbar({ user, onAuthClick, location, onChangeLocation }) {

  const [showCart, setShowCart] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };



  return (
    <div className="ths-nav">

      {/* LEFT */}
      <div className="ths-nav-left">
        <div className="ths-nav-items">
          <img src={Map} className="map-icon" alt="map" />
          <div className="ths-item">

            <p className="sans">
              {location ? location : "Select your branch"}
            </p>

            <span
              className="regular"
              onClick={onChangeLocation}
              style={{ cursor: "pointer" }}
            >
              Change branch
            </span>

          </div>
        </div>

        <div className="ths-nav-items">
          <img src={Phone} className="map-icon" alt="phone" />
          <div className="ths-item">
            <p>Call Now To Order</p>
            <strong className="sans">0321 456789</strong>
          </div>
        </div>
      </div>

      {/* CENTER LOGO */}
      <div className="ths-nav-center">
        <img src={Logo} alt="logo" />
      </div>

      {/* RIGHT */}
      <div className="ths-nav-right">
        {user ? (
          <div className="ths-nav-user">
            <p className="ths-user-name sans">
              {user.displayName || user.email}
            </p>
            <button className="ths-nav-logout regular" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button
            className="ths-nav-login regular"
            onClick={onAuthClick}
          >
            Signup/Login
          </button>

        )}

        <div className="divider"></div>

        <div className="ths-nav-cart" onClick={() => setShowCart(true)}>
          <img src={Cart} className="cart-icon" alt="cart" />
        </div>
      </div>

      {/* CartSidebar popup */}
      <CartSidebar
        show={showCart}           // ✅ pass show prop
        isOpen={showCart}         // ✅ keep your existing prop for CSS
        onClose={() => setShowCart(false)} // close function
        onCheckout={() => alert("Checkout clicked")} // example checkout
      />
    </div>

  );
}