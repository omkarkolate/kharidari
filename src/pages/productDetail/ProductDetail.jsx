import { Header } from "../../components/";
import styles from "./productDetail.module.css";

export function ProductDetail() {
  return (
    <div>
      <Header brandName />
      <div className={styles["wrapper"]}>
        <div className={styles["product-img"]}>
          <img src={`https://picsum.photos/300/360?random=1`} alt="product" />
          <div className={styles["product-page-actions"]}>
          <div className={styles["add-to-cart"]}>ADD TO CART</div>
          <div className={styles["order-it"]}>ORDER IT</div>
        </div>
        </div>
        <div className={styles["product-metadata"]}>
          <div className={styles["product-name"]}>VAN HEUSEN</div>
          <div className={styles["product-price"]}>₹349</div>
          <div className={styles["product-details"]}>
            <div className={styles["product-details-heading"]}>
              Product Details
            </div>
            <div className={styles["details"]}>
              <div className={styles["row"]}>
                <div className={styles["type"]}>Fabric</div>
                <div className={styles["value"]}>Cotton</div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["type"]}>Pattern</div>
                <div className={styles["value"]}>Solid</div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["type"]}>Color</div>
                <div className={styles["value"]}>Blue</div>
              </div>
              <div className={styles["row"]}>
                <div className={styles["type"]}>Fit</div>
                <div className={styles["value"]}>Regular</div>
              </div>
            </div>
            <div className={styles["product-details-heading"]}>Description</div>
            <div className={styles["description"]}>
              New range of formal shirts are designed keeping you in mind. With
              fits and styling that will make you stand apart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
