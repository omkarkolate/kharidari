import { Header } from "../../components/";
import styles from "./payment.module.css";
import { Link } from "react-router-dom";

export function Payment() {
  return (
    <div>
      <Header title="Payment" />
      <div className={styles["payment-options"]}>
        <div className={styles["option-title"]}>Available option</div>
        <div className={styles["options-list"]}>
          <div className={styles["option-field"]}>
            <input type="radio" name="Payment_Method" />
            <label htmlFor="Payment_Method"> Cash On delivery</label>
          </div>
        </div>

        <div className={styles["place-order-bar"]}>
          <div className={styles["total-amount"]}>24,998</div>
          <Link to="/payment">
            <div className={styles["place-order-btn"]}>CONTINUE</div>
          </Link>
        </div>
      </div>

      <div className={styles["price-details"]}>
        <div className={styles["details-card-heading"]}>PRICE DETAILS</div>
        <div className={styles["details-total-wrapper"]}>
          <div className={styles["details"]}>
            <div className={styles["row"]}>
              <div>Price (3 items)</div>
              <div>₹31,998</div>
            </div>
            <div className={styles["row"]}>
              <div>Discount</div>
              <div className={styles["text-green"]}>- ₹3998</div>
            </div>
            <div className={styles["row"]}>
              <div>Delivery Charges</div>
              <div className={styles["text-green"]}>FREE</div>
            </div>
          </div>
          <div className={styles["total"]}>
            <div>Total Amount</div>
            <div>₹23998</div>
          </div>
        </div>
      </div>
    </div>
  );
}
