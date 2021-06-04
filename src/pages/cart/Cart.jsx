import { Header } from "../../components/index";
import styles from "./cart.module.css";

export default function Cart() {
  return (
    <div className={styles["cart-page"]}>
      <Header title="My Cart" headerRightHide={true} />
      <div className={styles["cart-item-card"]}>
        <div className={styles["card-flex-wrapper"]}>
          <div className={styles["card-left"]}>
            <div className={styles["product-name"]}>PUMA T-shirt</div>
            <div className={styles["product-price"]}>₹604</div>
          </div>
          <div className={styles["card-right"]}>
            <div className={styles["product-image"]}>
              <img
                src={`https://picsum.photos/70/100?random=1`}
                alt="product"
              />
            </div>
            <div className={styles["product-quantity"]}>
              <select>
                <option value="1">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="3">Qty: 3</option>
                <option value="4">Qty: 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles["cart-card-actions"]}>
          <div className={styles["move-to-wishlist"]}>Move to wishlist</div>
          <div className={styles["remove"]}>Remove</div>
        </div>
      </div>

      <div className={styles["cart-item-card"]}>
        <div className={styles["card-flex-wrapper"]}>
          <div className={styles["card-left"]}>
            <div className={styles["product-name"]}>PUMA T-shirt</div>
            <div className={styles["product-price"]}>₹604</div>
          </div>
          <div className={styles["card-right"]}>
            <div className={styles["product-image"]}>
              <img
                src={`https://picsum.photos/70/100?random=2`}
                alt="product"
              />
            </div>
            <div className={styles["product-quantity"]}>
              <select>
                <option value="1">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="3">Qty: 3</option>
                <option value="4">Qty: 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles["cart-card-actions"]}>
          <div className={styles["move-to-wishlist"]}>Move to wishlist</div>
          <div className={styles["remove"]}>Remove</div>
        </div>
      </div>

      <div className={styles["price-details"]}>
        <div className={styles["details-card-heading"]}>PRICE DETAILS</div>
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

      <div className={styles["place-order-bar"]}>
        <div className={styles["total-amount"]}>24,998</div>
        <div className={styles["place-order-btn"]}>Place Order</div>
      </div>
    </div>
  );
}
