import { Header } from "../../components/";
import styles from "./orders.module.css";
import { Link } from "react-router-dom";

export function Orders() {
  return (
    <div>
      <Header brandName title="My Orders" />
      <div className={styles["orders"]}>
        <div className={styles["cart-product-list"]}>
          <div className={styles["cart-item-card"]}>
            <Link to="/orderDetails/123">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
