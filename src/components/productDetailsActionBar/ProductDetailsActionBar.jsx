import styles from "./productDtailActionBar.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../dataProvider/DataProvider";
import { useAuth } from "../../authProvider/AuthProvider";
import { useLoader } from "../../customHooks/useLoader";
import axios from "axios";

export function ProductDetailsActionBar({ product }) {
	const {
		state: { cart, userId },
		dispatch
	} = useData();
	const { isUserLogedin } = useAuth();
	const navigate = useNavigate();
	const { isLoaded, setIsLoaded } = useLoader();
	const productId = product._id;
	const inCart = cart.find(({ _id }) => _id === productId);

	let cartBtnText;
	if (isLoaded) {
		cartBtnText = "Adding to Cart...";
	} else {
		cartBtnText = inCart ? "GO TO CART" : "ADD TO CART";
	}

	async function addToCart(productId) {
		if (inCart) {
			navigate("/cart");
		} else {
			if (isUserLogedin) {
				try {
					setIsLoaded(true);
					const { data } = await axios.post(
						`https://kharidari.omkarkolate.repl.co/cart/${userId}/${productId}`
					);
					await dispatch({
						type: "ADD_TO_CART",
						payload: data.cartItem
					});
					setIsLoaded(false);
				} catch (error) {
					const {
						response: { data }
					} = error;
					console.log(data.message, data.error);
				}
			} else {
				setIsLoaded(true);
				await dispatch({
					type: "ADD_TO_CART",
					payload: {
						_id: productId,
						product,
						quantity: 1
					}
				});
				setIsLoaded(false);
			}
		}
	}

	async function buyNow(productId) {
		if (!isUserLogedin) {
			navigate("/login", {
				replace: true,
				state: { from: `/product-details/${productId}` }
			});
		} else {
			if (!inCart) {
				await addToCart(productId);
				navigate(`/checkout/${productId}`);
			} else {
				navigate(`/checkout/${productId}`);
			}
		}
	}

	return (
		<div className={styles["product-page-actions"]}>
			<div className={styles["add-to-cart-btn"]}>
				<div
					className={styles["add-to-cart"]}
					onClick={() => addToCart(productId)}
				>
					{cartBtnText}
				</div>
			</div>
			<div className={styles["buy-now-btn"]}>
				<div
					className={styles["buy-now"]}
					onClick={() => buyNow(productId)}
				>
					BUY NOW
				</div>
			</div>
		</div>
	);
}
