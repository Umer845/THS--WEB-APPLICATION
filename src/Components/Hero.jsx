import "../styles/font.css"
import "../styles/Home.css";
import Banner from "../assets/banner.png"

export default function Home({ onAddToCart }) {
  return (
    <div className="ths-home">

      {/* HERO SECTION */}
      <div className="ths-home-hero">
        <div className="ths-home-hero-content">
          <img src={Banner} className="banner-image" alt="banner" />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="ths-home-categories">
        <button className="ths-home-cat active regular">BEEF</button>
        <button className="ths-home-cat sans">CHICKEN</button>
        <button className="ths-home-cat sans">WRAPS</button>
        <button className="ths-home-cat sans">ARABIAN RICE & SALADS</button>
        <button className="ths-home-cat sans">STARTERS</button>
        <button className="ths-home-cat sans">WINGS</button>
        <button className="ths-home-cat sans">SIGNATURE SAUCES</button>
        <button className="ths-home-cat sans">DRINKS</button>

      </div>

    </div>
  );
}