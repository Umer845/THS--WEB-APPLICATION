import "../styles/confirmation.css";
import TickIcon from "../assets/tick.png";

export default function ConfirmationPopup({ show, onClose }) {
    if (!show) return null;

    return (
        <div className="conf-overlay">
            <div className="conf-card">

                <span class="close">×</span>
                <div class="icon-area">
                    <div class="tick">
                        <img src={TickIcon} alt="Confirmed" />
                    </div>
                </div>

                <h3 className="conf-title regular">Order Placed Successfully!</h3>
                <p className="conf-subtitle sans">Thank you for your order. Your order is being prepared and will be delivered soon!</p>

                <div className="conf-trac">
                    <div className="order-no">
                        <h2 className="sans">Order Number</h2>
                        <p className="regular">#THS12345</p>
                    </div>
                    <div className="order-no">
                        <h2 className="sans">Estimated Delivery</h2>
                        <p className="regular">30-45 minutes</p>
                    </div>
                </div>


                <button className="conf-close-btn" onClick={onClose}>
                    Continue Shopping
                </button>

                <p className="conf-confirm sans">
                    You will receive a confirmation SMS shortly.
                </p>

            </div>
        </div>
    );
}