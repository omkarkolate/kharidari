import { Header, ProductCard } from "../../components/";
import styles from "./wishlist.module.css";

export function Wishlist() {
  const products = [];

  for (let index = 0; index < 5; index++) {
    products.push(<ProductCard key={index} id={index} icon="trash" />);
  }

  return (
    <div>
      <Header brandName title="My Wishlist" />
      <div className={styles["product-grid"]}>{products}</div>
    </div>
  );
}
