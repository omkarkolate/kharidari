import styles from "./itemCard.module.css";
import { useData } from "../../dataProvider/DataProvider";
import { useAuth } from "../../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addOrRemoveFromWishlist } from "../utils";
import { useLoader } from "../../customHooks/useLoader";

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
		state: { wishlist, userId },
		dispatch,
		apiURL
	} = useData();
	const { isUserLogedin } = useAuth();
	const navigate = useNavigate();
	const {
		isLoaded: wishlistLoader,
		setIsLoaded: setWishlistLoader
	} = useLoader();
	const { isLoaded: cartLoader, setIsLoaded: setCartLoader } = useLoader();

	const inWishlist = wishlist.find((product) => product._id === id);

	const discountedPrice = discount
		? Math.round(price - (discount * price) / 100)
		: price;

	async function quantityUpadate(id, quantity) {
		if (isUserLogedin) {
			try {
				const { data } = await axios.put(
					`${apiURL}/cart/${userId}/${id}`,
					{
						quantity: quantity
					}
				);
				if (data.success) {
					await dispatch({
						type: "QUANTITY_UPADTE",
						payload: { id, quantity }
					});
				}
			} catch (error) {
				const {
					response: { data }
				} = error;
				console.log(data.message, data.error);
			}
		} else {
			await dispatch({
				type: "QUANTITY_UPADTE",
				payload: { id, quantity }
			});
		}
	}

	async function removeFromCart(id) {
		setCartLoader(true);
		if (isUserLogedin) {
			try {
				const { data } = await axios.delete(
					`${apiURL}/cart/${userId}/${id}`
				);
				if (data.success) {
					await dispatch({
						type: "REMOVE_FROM_CART",
						payload: id
					});
				}
			} catch (error) {
				console.log(error);
				const {
					response: { data }
				} = error;
				console.log(data.message, data.error);
			}
		} else {
			await dispatch({
				type: "REMOVE_FROM_CART",
				payload: id
			});
		}
	}

	async function moveToWishlist(id) {
		setWishlistLoader(true);
		await addOrRemoveFromWishlist(inWishlist, userId, id, dispatch, apiURL);
		setWishlistLoader(false);

		if (!inWishlist) {
			await removeFromCart(id);
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
					{isUserLogedin && (
						<div
							className={styles["move-to-wishlist"]}
							onClick={() => moveToWishlist(id)}
						>
							{inWishlist
								? wishlistLoader
									? "Removing..."
									: "Remove from wishlist"
								: wishlistLoader
								? "Moving..."
								: "Move to wishlist"}
						</div>
					)}
					<div
						className={styles["remove"]}
						onClick={() => removeFromCart(id)}
					>
						{cartLoader ? "Removing..." : "Remove"}
					</div>
				</div>
			)}
		</div>
	);
}
