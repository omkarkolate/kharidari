import styles from "./sortAndFilter.module.css";

export function SortAndFilter() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["mobile-view"]}>
        <div className={styles["sort"]}>
          <div className={styles["icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrows-sort"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 9l4 -4l4 4m-4 -4v14" />
              <path d="M21 15l-4 4l-4 -4m4 4v-14" />
            </svg>
          </div>
          Sort
        </div>
        <div className={styles["filter"]}>
          <div className={styles["icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-filter"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
            </svg>
          </div>
          Filter
        </div>
      </div>

      <div className={styles["desktop-view"]}>
        <fieldset className={styles["sort-by"]}>
          <legend>Sort By</legend>
          <div className={styles["field"]}>
            <label htmlFor="PRICE_LOW_TO_HIGH">Price: Low to High</label>
            <input
              type="radio"
              id="PRICE_LOW_TO_HIGH"
              name="SORT"
              value="PRICE_LOW_TO_HIGH"
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="PRICE_HIGH_TO_LOW">Price: High to Low</label>
            <input
              type="radio"
              id="PRICE_HIGH_TO_LOW"
              name="SORT"
              value="PRICE_HIGH_TO_LOW"
            />
          </div>
        </fieldset>
        <fieldset className={styles["filter-by"]}>
          <legend>Filter By</legend>
          <div className={styles["field"]}>
            <label htmlFor="INCLUDE_OUT_OF_STOCK">Include out of stock</label>
            <input
              type="checkbox"
              id="INCLUDE_OUT_OF_STOCK"
              name="INCLUDE_OUT_OF_STOCK"
              value="INCLUDE_OUT_OF_STOCK"
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="FREE_DELIVERY_ONLY">Free delivery only</label>
            <input
              type="checkbox"
              id="FREE_DELIVERY_ONLY"
              name="FREE_DELIVERY_ONLY"
              value="FREE_DELIVERY_ONLY"
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
