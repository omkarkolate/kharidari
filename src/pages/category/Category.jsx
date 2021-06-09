import { Header, SortAndFilter, ProductCard } from "../../components/";
import styles from "./category.module.css";

export function Category() {
  const products = [];

  for (let index = 0; index < 10; index++) {
    products.push(<ProductCard key={index} image={index} />);
  }

  return (
    <div>
      <Header productCategory="Mens Clothing SS21 trying text" />
      <SortAndFilter />
      <div className={styles["product-grid"]}>{products}</div>
    </div>
  );
}
