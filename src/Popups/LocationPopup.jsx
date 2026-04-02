import { useState } from "react";
import "../styles/selectionPopup.css";
import Logo from "../assets/Logo.png";
import Map from "../assets/mage_location-fill.png";

export default function SelectionPopup({ onClose, onSelectLocation }) {
  const [activeType, setActiveType] = useState("pickup");
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  // 📍 Fetch current location
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        setLocation({ latitude, longitude });

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          setAddress(data.display_name || "Location found");
        } catch (err) {
          console.log(err);
          setAddress("Location detected");
        }
      },
      (error) => {
        alert("Unable to fetch location");
        console.log(error);
      }
    );
  };

  // 🗺️ Open Google Maps direction
  const handleDirections = () => {
    if (!location) {
      alert("Please select location first");
      return;
    }

    const { latitude, longitude } = location;

    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  // ✅ SELECT BUTTON (MAIN FIX)
  const handleSelect = () => {
    if (!address) {
      alert("Please select location first");
      return;
    }
    if (onSelectLocation) {
      onSelectLocation(address);
    }
    onClose();
  };

  return (
    <div className="ths-select-overlay">
      <div className="ths-select-modal">

        {/* LOGO */}
        <img src={Logo} alt="logo" className="ths-select-logo" />

        {/* TITLE */}
        <h2 className="ths-select-title sans">Select your order type</h2>

        {/* ORDER TYPE BUTTONS */}
        <div className="ths-select-types">
          <button
            className={`ths-select-type sans ${activeType === "delivery" ? "active" : ""}`}
            onClick={() => setActiveType("delivery")}
          >
            DELIVERY
          </button>

          <button
            className={`ths-select-type sans ${activeType === "pickup" ? "active" : ""}`}
            onClick={() => setActiveType("pickup")}
          >
            PICK-UP
          </button>
        </div>

        {/* SUBTITLE */}
        <p className="ths-select-subtitle sans">
          Which outlet would you like to pick-up from?
        </p>

        {/* LOCATION BUTTON */}
        <button
          className="ths-select-location-btn sans"
          onClick={handleGetLocation}
        >
          <img src={Map} alt="map" />
          Use Current Location
        </button>

        {/* DROPDOWNS */}
        <div className="ths-select-row">
          <select className="ths-select-dropdown sans">
            <option>{address || "Select City"}</option>
          </select>

          <select className="ths-select-dropdown sans">
            <option>Area</option>
          </select>
        </div>

        {/* ADDRESS */}
        <div className="ths-select-address">
          <span className="sans">
            {address || "No location selected"}
          </span>

          <span
            className="ths-select-direction regular"
            onClick={handleDirections}
            style={{ cursor: "pointer" }}
          >
            Get Directions
          </span>
        </div>

        {/* SELECT BUTTON */}
        <button className="ths-select-btn regular" onClick={handleSelect}>
          Select
        </button>

      </div>
    </div>
  );
}