import { Header, SortAndFilter, ProductCard } from "../../components/index";
import styles from "./productList.module.css";

export default function ProductList() {
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
