import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../authProvider/AuthProvider";
import { HeartIconBtn, TrashIconBtn } from "../index";

export function ProductCard({ productId, image, name, price, icon, discount }) {
	const { isUserLogedin } = useAuth();

	const displayIconBtn =
		icon === "heart" ? (
			<HeartIconBtn productId={productId} />
		) : (
			<TrashIconBtn productId={productId} />
		);

	const discountedPrice = Math.round(price - (discount * price) / 100);

	return (
		<div className={styles["product-card"]}>
			<Link to={`/product-details/${productId}`}>
				<div className={styles["product-img"]}>
					<img src={image} alt={name} />
				</div>
				<div className={styles["product-info"]}>
					<div className={styles["product-name"]}>{name}</div>
					<div className={styles["price-and-discount"]}>
						<div className={styles["product-price"]}>
							₹{discountedPrice}
						</div>
						<div className={styles["actual-price"]}>{price}</div>
						<div className={styles["discount"]}>
							{discount}% off
						</div>
					</div>
				</div>
			</Link>
			{isUserLogedin && displayIconBtn}
		</div>
	);
}
