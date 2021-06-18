import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

export function ProductCard({ id }) {
  return (
    <div className={styles["product-card"]}>
      <Link to={`/productDetail/${id}`}>
        <div className={styles["product-img"]}>
          <img
            src={`https://picsum.photos/500/300?random=${id}`}
            alt="product"
          />
        </div>
        <div className={styles["product-info"]}>
          <div className={styles["product-name"]}>ADIDAS</div>
          <div className={styles["product-price"]}>₹999</div>
        </div>
      </Link>
    </div>
  );
}
