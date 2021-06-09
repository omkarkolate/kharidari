import styles from "./home.module.css";

export function Home() {
  return (
    <div>
      <header className={styles["homepage-header"]}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
        <div>
          <h2 className={styles["brand-name"]}>Kharidari</h2>
        </div>
        <div className={styles["cart-icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
        </div>
        <div className={styles["login"]}>Login</div>
      </header>
      <div className={styles["search-bar"]}>
        <input
          type="search"
          placeholder="🔍 Search for Products, Brands and More"
        />
      </div>
      <section className={styles["categories-section"]}>
        <div
          className={styles["category-card"]}
          role="button"
          onClick={() => console.log("Yess..")}
        >
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              👫
            </span>
          </div>
          <div className={styles["category-name"]}>Fashion</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              📱
            </span>
          </div>
          <div className={styles["category-name"]}>Mobiles</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              💻
            </span>
          </div>
          <div className={styles["category-name"]}>Electronics</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              🏠
            </span>
          </div>
          <div className={styles["category-name"]}>Home</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              📺
            </span>
          </div>
          <div className={styles["category-name"]}>Appliances</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              💄
            </span>
          </div>
          <div className={styles["category-name"]}>Beauty</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              🎠
            </span>
          </div>
          <div className={styles["category-name"]}>Toys</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              🛋️
            </span>
          </div>
          <div className={styles["category-name"]}>Furniture</div>
        </div>
        <div className={styles["category-card"]}>
          <div className={styles["category-img"]}>
            <span role="img" aria-label="Clothing">
              🏸
            </span>
          </div>
          <div className={styles["category-name"]}>Sports</div>
        </div>
      </section>
    </div>
  );
}
