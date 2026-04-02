import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MenuSection from "./Components/MenuSection";

import LocationPopup from "./Popups/LocationPopup";
import AuthPopup from "./Popups/AuthPopup";
import CartPopup from "./Popups/CartPopup";
import CartSidebar from "./Popups/CartSidebar";
import Checkout from "./Popups/Checkout";
import ConfirmationPopup from "./Popups/ConfirmationPopup";
import SelectionPopup from "./Popups/LocationPopup";
import Footer from "./Components/Footer";

function App() {
  // Popups state
  const [location, setLocation] = useState(null);
  const [showLocation, setShowLocation] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  // ✅ Track logged-in user
  const [user, setUser] = useState(null);

  useEffect(() => {
    setShowLocation(true);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // null if logged out
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  const handleAddToCart = (item) => {
    setCartItems([{
      id: Date.now(),
      name: item.title,
      price: item.price,
      qty: 1,
      img: item.img,
      desc: item.desc || ""
    }]);

    setOpenCart(true);
  };

  return (
    <>
      {/* Pass user and login click handler to Navbar */}
      <Navbar
        user={user}
        location={location}
        onChangeLocation={() => setShowLocation(true)}
        onAuthClick={() => setShowAuth(true)}
      />

      {showLocation && (
        <SelectionPopup
          onClose={() => setShowLocation(false)}
          onSelectLocation={(selectedLocation) => {
            setLocation(selectedLocation);
            setShowLocation(false);
          }}
        />
      )}

      <Hero />
      <MenuSection onAddToCart={handleAddToCart} />


      {showLocation && <LocationPopup onClose={() => setShowLocation(false)} />}
      {showAuth && <AuthPopup onClose={() => setShowAuth(false)} />}

      {showCart && (
        <CartPopup
          onClose={() => setShowCart(false)}
          openSidebar={() => setOpenSidebar(true)}
        />
      )}

      <CartSidebar
        isOpen={openCart}
        onClose={() => setOpenCart(false)}
        show={openCart}
        cartItems={cartItems}   // ✅ PASS DATA
        setCartItems={setCartItems} // ✅ PASS SETTER
      />

      {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
      {showConfirm && <ConfirmationPopup show={showConfirm} onClose={() => setShowConfirm(false)} />}

      <Footer />
    </>
  );
}

export default App;