import styles from "./priceDetails.module.css";

export function PriceDetails({ price, discount, deliveryCharges, items }) {
	return (
		<div className={styles["price-details"]}>
			<div className={styles["details-card-heading"]}>PRICE DETAILS</div>
			<div className={styles["details-total-wrapper"]}>
				<div className={styles["details"]}>
					<div className={styles["row"]}>
						<div>
							Price ({items} {items > 1 ? "items" : "item"})
						</div>
						<div>₹{price}</div>
					</div>
					<div className={styles["row"]}>
						<div>Discount</div>
						<div className={styles["text-green"]}>
							- ₹{discount}
						</div>
					</div>
					<div className={styles["row"]}>
						<div>Delivery Charges</div>
						{deliveryCharges > 0 ? (
							<div>{deliveryCharges}</div>
						) : (
							<div className={styles["text-green"]}>FREE</div>
						)}
					</div>
				</div>
				<div className={styles["total"]}>
					<div>Total Amount</div>
					<div>₹{price - discount + deliveryCharges}</div>
				</div>
			</div>
		</div>
	);
}
