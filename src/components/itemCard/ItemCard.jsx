import styles from "./itemCard.module.css";
import { useData } from "../../dataProvider/DataProvider";
import { useNavigate } from "react-router-dom";

export function ItemCard({
	id,
	name,
	price,
	image,
	discount,
	quantity,
	showActionBtns,
	path
}) {
	const {
		state: { wishlist },
		dispatch
	} = useData();

	const navigate = useNavigate();

	const inWishlist = wishlist.find((product) => product.id === id);

	const discountedPrice = discount
		? Math.round(price - (discount * price) / 100)
		: price;

	function quantityUpadate(id, quantity) {
		dispatch({
			type: "QUANTITY_UPADTE",
			payload: { id, quantity }
		});
	}

	function removeFromCart(id) {
		dispatch({
			type: "REMOVE_FROM_CART",
			payload: id
		});
	}

	function moveToWishlist(id) {
		if (!inWishlist) {
			dispatch({
				type: "MOVE_TO_WISHLIST",
				payload: id
			});
		}
	}

	function gotoPath() {
		if (path) {
			navigate(path);
		}
	}

	return (
		<div className={styles["item-card"]}>
			<div className={styles["card-flex-wrapper"]}>
				<div className={styles["card-left"]}>
					<div className={styles["product-name"]} onClick={gotoPath}>
						{name}
					</div>
					<div className={styles["price-and-discount"]}>
						<div className={styles["product-price"]}>
							₹{discountedPrice}
						</div>
						{discount && (
							<div className={styles["actual-price"]}>
								{price}
							</div>
						)}
						{discount && (
							<div className={styles["discount"]}>
								{discount}% off
							</div>
						)}
					</div>
				</div>
				<div className={styles["card-right"]}>
					<div className={styles["product-image"]}>
						<img src={image} alt={name} />
					</div>
					{quantity && (
						<div className={styles["product-quantity"]}>
							<select
								value={quantity}
								onChange={(event) =>
									quantityUpadate(id, event.target.value)
								}
							>
								<option value="1">Qty: 1</option>
								<option value="2">Qty: 2</option>
								<option value="3">Qty: 3</option>
								<option value="4">Qty: 4</option>
								<option value="5">Qty: 5</option>
							</select>
						</div>
					)}
				</div>
			</div>
			{showActionBtns && (
				<div className={styles["cart-card-actions"]}>
					<div
						className={styles["move-to-wishlist"]}
						onClick={() => moveToWishlist(id)}
					>
						{inWishlist
							? "Already in wishlist"
							: "Move to wishlist"}
					</div>
					<div
						className={styles["remove"]}
						onClick={() => removeFromCart(id)}
					>
						Remove
					</div>
				</div>
			)}
		</div>
	);
}
