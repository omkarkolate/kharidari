import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useData } from "../../dataProvider/DataProvider";
import { useAuth } from "../../authProvider/AuthProvider";

export function ProductCard({ id, image, name, price, icon, discount }) {
	const {
		state: { wishlist },
		dispatch
	} = useData();
	const { isUserLogedin } = useAuth();

	const inWishlist = wishlist.find((product) => product.id === id);

	function addOrRemoveFromWishlist(id) {
		inWishlist
			? dispatch({
					type: "REMOVE_FROM_WISHLIST",
					payload: id
			  })
			: dispatch({
					type: "ADD_TO_WISHLIST",
					payload: id
			  });
	}

	const heartIcon = (
		<div
			className={styles["wishlist-action-btn"]}
			onClick={() => addOrRemoveFromWishlist(id)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-heart"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke={inWishlist ? "red" : "#9e9e9e"}
				fill={inWishlist ? "red" : "none"}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
			</svg>
		</div>
	);

	const trashIcon = (
		<div
			className={styles["wishlist-action-btn"]}
			onClick={() => addOrRemoveFromWishlist(id)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-trash"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="#9e9e9e"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<line x1="4" y1="7" x2="20" y2="7" />
				<line x1="10" y1="11" x2="10" y2="17" />
				<line x1="14" y1="11" x2="14" y2="17" />
				<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
				<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
			</svg>
		</div>
	);

	const displayIcon = icon === "heart" ? heartIcon : trashIcon;

	const discountedPrice = Math.round(price - (discount * price) / 100);

	return (
		<div className={styles["product-card"]}>
			<Link to={`/product-details/${id}`}>
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
			{isUserLogedin && displayIcon}
		</div>
	);
}
