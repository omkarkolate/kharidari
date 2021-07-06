import { Header, SortAndFilter, ProductCard } from "../../components/";
import styles from "./category.module.css";

export function Category() {
  const products = [];

  for (let index = 0; index < 10; index++) {
    products.push(<ProductCard key={index} id={index} />);
  }

  return (
    <div className={styles["category-page"]}>
      <Header brandName searchIcon />
      <SortAndFilter />
      <div className={styles["product-grid"]}>{products}</div>
    </div>
  );
}
