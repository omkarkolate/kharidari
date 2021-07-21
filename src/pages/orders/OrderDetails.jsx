import { Header } from "../../components/";
import styles from "./orders.module.css";

export function OrderDetails() {
  return (
    <div className={styles["page"]}>
      <Header brandName title="Orders Details" />
      <div className={styles["cart-flex-wrapper"]}>
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
            </div>
          </div>
        </div>

        <div className={styles["delivery-address"]}>
          <div className={styles["address-card"]}>
            <div className={styles["address-name"]}>Omkar Kolate</div>
            <div className={styles["address-details"]}>
              Mauli, Vanipeth, A/P Amba, Tal - Shahuwadi, Kolhapur District,
              Maharashtra - 415101
            </div>
            <div className={styles["address-mobileno"]}>8888540008</div>
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
    </div>
  );
}
