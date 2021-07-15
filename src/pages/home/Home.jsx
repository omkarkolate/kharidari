import { Header } from "../../components";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Header homepage brandName />
      <div className={styles["search-bar"]}>
        <input
          type="search"
          placeholder="🔍 Search for Products, Brands and More"
        />
      </div>
      <section className={styles["categories-section"]}>
        <Link to="category/fashion">
          <div className={styles["category-card"]} role="button">
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                👫
              </span>
            </div>
            <div className={styles["category-name"]}>Fashion</div>
          </div>
        </Link>
        <Link to="category/mobiles">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                📱
              </span>
            </div>
            <div className={styles["category-name"]}>Mobiles</div>
          </div>
        </Link>
        <Link to="category/electronics">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                💻
              </span>
            </div>
            <div className={styles["category-name"]}>Electronics</div>
          </div>
        </Link>
        <Link to="category/home">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                🏠
              </span>
            </div>
            <div className={styles["category-name"]}>Home</div>
          </div>
        </Link>
        <Link to="category/appliances">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                📺
              </span>
            </div>
            <div className={styles["category-name"]}>Appliances</div>
          </div>
        </Link>
        <Link to="category/beauty">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                💄
              </span>
            </div>
            <div className={styles["category-name"]}>Beauty</div>
          </div>
        </Link>
        <Link to="category/Toys">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                🎠
              </span>
            </div>
            <div className={styles["category-name"]}>Toys</div>
          </div>
        </Link>
        <Link to="category/furniture">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                🛋️
              </span>
            </div>
            <div className={styles["category-name"]}>Furniture</div>
          </div>
        </Link>
        <Link to="category/sports">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                🏸
              </span>
            </div>
            <div className={styles["category-name"]}>Sports</div>
          </div>
        </Link>
      </section>
    </div>
  );
}
