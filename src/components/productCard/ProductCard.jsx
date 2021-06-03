import styles from "./productCard.module.css";

export default function ProductCard({ image }) {
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-img"]}>
        <img
          src={`https://picsum.photos/500/300?random=${image}`}
          alt="product"
        />
      </div>
      <div className={styles["product-info"]}>
        <div className={styles["product-name"]}>ADIDAS</div>
        <div className={styles["product-price"]}>₹999</div>
      </div>
    </div>
  );
}
