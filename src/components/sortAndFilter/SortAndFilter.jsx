import styles from "./sortAndFilter.module.css";

export default function SortAndFilter() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["sort"]}>
        <div className={styles["icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrows-sort"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
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
            strokeWidth="2"
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
  );
}
