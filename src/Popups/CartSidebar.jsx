import { useState } from "react";
import "../styles/CartSidebar.css";
import BurgerImg from "../assets/ImageWithFallback.png";
import Burger2 from "../assets/shroom.png";
import Pasta from "../assets/alfredo.png";
import Drink from "../assets/sprite.png";
import Trash from "../assets/delete.png";

export default function CartSidebar({
    isOpen,
    onClose,
    onCheckout,
    show,
    cartItems: externalCart,
    setCartItems: setExternalCart
}) {

    if (!show) return null;

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "The Monster Smash",
            price: 829,
            qty: 1,
            img: BurgerImg,
            desc: "Signature Black Bun, American Cheese Slice, Secret  Sauce, Grill Led Onion..."
        },
        {
            id: 2,
            name: "Shroom Melt",
            price: 799,
            qty: 1,
            img: Burger2,
            desc: "American Cheese Slice, Shroom Sauce, Lettuce & a Little Touch of Honey..."
        },
        {
            id: 3,
            name: "Fettuccine Alfredo",
            price: 1099,
            qty: 1,
            img: Pasta,
            desc: ""
        },
        {
            id: 4,
            name: "Soft Drink",
            price: 149,
            qty: 1,
            img: Drink,
            desc: "1x Sprite"
        }
    ]);

    // ✅ Use external cart if exists
    const items = externalCart && externalCart.length ? externalCart : cartItems;
    const setItems = setExternalCart || setCartItems;

    // ➕ Increase
    const increaseQty = (id) => {
        setItems(items =>
            items.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // ➖ Decrease
    const decreaseQty = (id) => {
        setItems(items =>
            items.map(item =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    // 🗑 Remove
    const removeItem = (id) => {
        setItems(items => items.filter(item => item.id !== id));
    };

    // 🧾 Calculations
    const subtotal = items.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const delivery = 150;
    const total = subtotal + delivery;

    return (
        <div
            className={`cs-overlay ${isOpen ? "cs-show" : ""}`}
            onClick={onClose}
        >
            <div
                className="cs-panel"
                onClick={(e) => e.stopPropagation()}
            >

                {/* HEADER */}
                <div className="cs-header">
                    <h2 className="regular">Your Cart</h2>
                    <button onClick={() => setItems([])}>Clear cart</button>
                </div>

                {/* ITEMS */}
                <div className="cs-items">
                    {items.length === 0 ? (
                        <p className="cs-empty">Your cart is empty</p>
                    ) : (
                        items.map((item) => (
                            <div className="cs-item" key={item.id}>

                                <div className="cs-subitems">
                                    <img src={item.img} alt="" />

                                    <div className="cs-info">
                                        <h4 className="regular">{item.name}</h4>
                                        <p className="sans">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="cs-price">
                                    <div className="cs-qty">
                                        <button onClick={() => decreaseQty(item.id)}>−</button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => increaseQty(item.id)}>+</button>
                                    </div>
                                    <h5 className="regular">
                                        Rs. {(item.price * item.qty).toLocaleString()}
                                        <div onClick={() => removeItem(item.id)}>
                                            <img src={Trash} className="delete-icon" alt="Remove item" />
                                        </div>
                                    </h5>
                                </div>

                            </div>
                        ))
                    )}
                </div>

                {/* FOOTER */}
                <div className="cs-footer">
                    <div className="cs-bill">
                        <div className="cs-subtotal">
                            <span className="sans">Subtotal</span>
                            <span className="sans">Rs. {subtotal.toLocaleString()}</span>
                        </div>
                        <div className="cs-subtotal">
                            <span className="sans">Delivery Charges</span>
                            <span className="sans">Rs. {delivery}</span>
                        </div>
                        <div className="cs-total">
                            <span className="regular">Grand total</span>
                            <span className="regular">Rs. {total.toLocaleString()}</span>
                        </div>
                    </div>

                    <button
                        className="cs-checkout"
                        onClick={onCheckout}
                    >
                        Checkout
                    </button>
                </div>

            </div>
        </div>
    );
}