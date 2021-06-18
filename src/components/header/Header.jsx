import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

export function Header({ homepage, brandName, title, searchIcon }) {
  let history = createBrowserHistory();

  function goBack() {
    history.back();
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["header-left"]}>
        {homepage ? (
          <div className={styles["hamburger-menu"]}>
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
        ) : (
          <div className={styles["header-back-btn"]} onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left"
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </div>
        )}

        <div className={styles["brand-sm"]}>
          <Link to="/">
            {homepage && brandName ? (
              <h2 className={styles["brand-name"]}>Kharidari</h2>
            ) : (
              <h2 className={styles["brand-logo"]}>K</h2>
            )}
          </Link>
        </div>

        <div className={styles["brand-md"]}>
          <Link to="/">
              <h2 className={styles["brand-name"]}>Kharidari</h2>
          </Link>
        </div>

        <div className={styles["header-title"]}>{title ?? ""} </div>
        <div className={styles["search-bar-md"]}>
          <input
            type="search"
            placeholder="🔍 Search for Products, Brands and More"
          />
        </div>
      </div>

      <div className={styles["header-right"]}>
        {searchIcon && (
          <div className={styles["search-icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
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
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
        )}

        <div className={styles["cart-icon"]}>
          <Link to="/cart">
            <div className={styles["cart-icon-heading"]}>
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
              <div className={styles["cart-heading"]}>Cart</div>
            </div>
          </Link>
        </div>
        <div className={styles["login"]}>Login</div>
      </div>
    </header>
  );
}
