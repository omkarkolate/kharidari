import { Header } from "../../components";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Header homepage brandName/>
      <div className={styles["search-bar"]}>
        <input
          type="search"
          placeholder="🔍 Search for Products, Brands and More"
        />
      </div>
      <section className={styles["categories-section"]}>
        <Link to="/fashion">
          <div
            className={styles["category-card"]}
            role="button"
            onClick={() => console.log("Category selected...")}
          >
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                👫
              </span>
            </div>
            <div className={styles["category-name"]}>Fashion</div>
          </div>
        </Link>
        <Link to="/mobiles">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                📱
              </span>
            </div>
            <div className={styles["category-name"]}>Mobiles</div>
          </div>
        </Link>
        <Link to="/electronics">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                💻
              </span>
            </div>
            <div className={styles["category-name"]}>Electronics</div>
          </div>
        </Link>
        <Link to="/home">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                🏠
              </span>
            </div>
            <div className={styles["category-name"]}>Home</div>
          </div>
        </Link>
        <Link to="/appliances">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                📺
              </span>
            </div>
            <div className={styles["category-name"]}>Appliances</div>
          </div>
        </Link>
        <Link to="/beauty">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                💄
              </span>
            </div>
            <div className={styles["category-name"]}>Beauty</div>
          </div>
        </Link>
        <Link to="/Toys">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                🎠
              </span>
            </div>
            <div className={styles["category-name"]}>Toys</div>
          </div>
        </Link>
        <Link to="/furniture">
          <div className={styles["category-card"]}>
            <div className={styles["category-img"]}>
              <span role="img" aria-label="Clothing">
                🛋️
              </span>
            </div>
            <div className={styles["category-name"]}>Furniture</div>
          </div>
        </Link>
        <Link to="/sports">
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
