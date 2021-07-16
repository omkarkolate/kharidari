import styles from "./shopNow.module.css";
import { Link } from "react-router-dom";

export function ShopNow({ message }) {
  return (
    <div className={styles["message-box"]}>
      <div className={styles["message-text"]}>{message}</div>
      <Link to="/">
        <div className={styles["shop-now-btn"]}>Shop now</div>
      </Link>
    </div>
  );
}
