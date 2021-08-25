import styles from "./bottomActionBar.module.css";

export function BottomActionBar({ buttonText, totalAmount, callback }) {
	return (
		<div className={styles["bottom-action-bar"]}>
			<div className={styles["total-amount"]}>{totalAmount}</div>
			<div className={styles["bottom-action-btn"]} onClick={callback}>
				{buttonText}
			</div>
		</div>
	);
}
