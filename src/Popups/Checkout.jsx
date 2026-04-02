import { useState } from "react";
import "../styles/Checkout.css";
import Arrow from "../assets/arrow-right.png";
import Flag from "../assets/Pakistan.png";
import Burger1 from "../assets/Meg Classic.png";
import Burger2 from "../assets/Shroom Melt.png";
import ConfirmationPopup from "../Popups/ConfirmationPopup";

export default function Checkout({ onClose }) {
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="checkout-overlay">
            <div className="checkout-container">

                {/* HEADER */}
                <div className="checkout-header">
                    <div>
                        <h2 className="sans">
                            Home
                            <img src={Arrow} alt="Arrow" />
                            <span className="regular">Checkout</span>
                        </h2>
                    </div>
                    <button className="checkout-close" onClick={onClose}>✕</button>
                </div>

                <div className="checkout-body">

                    {/* LEFT */}
                    <div className="checkout-left">

                        <div className="checkout-row">
                            <div className="field full">
                                <label className="regular">Full Name</label>
                                <input type="text" className="sans" placeholder="Enter your name" />
                            </div>

                            <div className="field full">
                                <label className="regular">Mobile Number</label>
                                <div className="phone-input">
                                    <span className="regular">
                                        <img src={Flag} alt="Flag" />
                                        +92
                                    </span>
                                    <input type="text" className="sans" placeholder="320 4567891" />
                                </div>
                            </div>

                            <div className="field full">
                                <label className="regular">Email Address</label>
                                <input type="email" className="sans" placeholder="Enter your email address" />
                            </div>
                        </div>

                        <div className="field full">
                            <label className="regular">Delivery Address</label>
                            <div className="address-box">
                                <input type="text" className="sans" placeholder="Enter delivery address" />
                                <span className="change-link regular">Change address</span>
                            </div>
                        </div>

                        <div className="field full">
                            <label className="regular">Special Instructions (Optional)</label>
                            <textarea placeholder="Add any comment, e.g about allergies, or delivery instructions here..." className="sans"></textarea>
                        </div>

                        <div className="field full">
                            <label className="regular">Select Payment Method</label>
                            <select className="sans">
                                <option>Select payment method</option>
                                <option>Cash on Delivery</option>
                                <option>Card</option>
                            </select>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="checkout-right">
                        <h3 className="regular">Your Cart</h3>

                        <div className="food-row">
                            <div className="food-img">
                                <img src={Burger1} alt="" />
                            </div>
                            <div className="food-info">

                                <div className="food-top">
                                    <h3 className="regular">Meg Classic</h3>
                                </div>
                                <p className="sans">
                                    Signature Black Bun, American Cheese Slice, Secret Meg Sauce, Grill Led Onions, Pickles &amp;...
                                </p>
                                <div className="food-bottom">
                                    <div className="food-qty sans">1</div>
                                    <span className="food-price regular">Rs. 829.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="food-row">
                            <div className="food-img">
                                <img src={Burger2} alt="" />
                            </div>
                            <div className="food-info">

                                <div className="food-top">
                                    <h3 className="regular">Shroom Melt</h3>
                                </div>
                                <p className="sans">
                                    American Cheese Slice, Shroom Sauce, Lettuce & a Little Touch of Honey Mustard &amp;
                                </p>
                                <div className="food-bottom">
                                    <div className="food-qty sans">1</div>
                                    <span className="food-price regular">Rs. 799.00</span>
                                </div>
                            </div>
                        </div>

                        <p className="checkout-add regular">+ Add more items</p>

                        <div className="promo">
                            <label className="sans">Apply Promo Code &amp; Voucher</label>
                            <input type="text" className="sans" placeholder="Promo Code" />
                        </div>

                        <div className="checkout-summary">
                            <div className="subtitle">
                                <h2 className="sans">Subtotal</h2>
                                <span className="sans">Rs. 1,628</span>
                            </div>
                            <div className="subtitle">
                                <h2 className="sans">Delivery Charges</h2>
                                <span className="sans">Rs. 100</span>
                            </div>
                            <div className="checkout-total">
                                <span className="regular">Grand total</span>
                                <span className="regular">Rs. 1,728</span>
                            </div>
                        </div>

                        <button className="checkout-order-btn" onClick={() => setShowConfirm(true)}>
                            Place Order
                        </button>

                        <ConfirmationPopup
                            show={showConfirm}
                            onClose={() => setShowConfirm(false)}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}