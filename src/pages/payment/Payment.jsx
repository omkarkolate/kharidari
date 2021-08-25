import { Header, PriceDetails, BottomActionBar } from "../../components/";
import styles from "./payment.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";
import uuid from "react-uuid";
import { getPricetDetails } from "../utils";

export function Payment() {
	const {
		state: { cart },
		dispatch
	} = useData();

	const { state: routerState } = useLocation();

	const {
		productId,
		deliveryAddress,
		priceDetails
	} = routerState.orderDetails;

	const navigate = useNavigate();

	function addToOrders() {
		if (productId) {
			dispatch({
				type: "ADD_TO_ORDERS",
				payload: [
					{
						id: uuid(),
						productId,
						deliveryAddress,
						priceDetails
					}
				]
			});

			dispatch({
				type: "REMOVE_FROM_CART",
				payload: productId
			});
		} else {
			const orders = cart.map((product) => ({
				id: uuid(),
				productId: product.id,
				quantity: product.quantity,
				deliveryAddress,
				priceDetails: getPricetDetails(
					{
						price: 0,
						discount: 0,
						deliveryCharges: 0
					},
					product
				)
			}));

			dispatch({
				type: "ADD_TO_ORDERS",
				payload: orders
			});

			dispatch({
				type: "REMOVE_ALL_FROM_CART",
				payload: []
			});
		}

		navigate("/successful");
	}

	const totalAmount =
		priceDetails.price -
		priceDetails.discount +
		priceDetails.deliveryCharges;

	return (
		<div>
			<Header title="Payment" />
			<div className={styles["payment-flex-wrapper"]}>
				<div className={styles["payment-flex-left"]}>
					<div className={styles["payment-options"]}>
						<div className={styles["option-title"]}>
							Available option
						</div>
						<div className={styles["options-list"]}>
							<div className={styles["option-field"]}>
								<input
									type="radio"
									name="Payment_Method"
									id="cash_on_delivery"
									defaultChecked
								/>
								<label htmlFor="cash_on_delivery">
									{" "}
									Cash On delivery
								</label>
							</div>
						</div>
					</div>
					<BottomActionBar
						buttonText="Place Order"
						totalAmount={totalAmount}
						callback={addToOrders}
					/>
				</div>
				<PriceDetails
					{...priceDetails}
					items={productId ? 1 : cart.length}
				/>
			</div>
		</div>
	);
}
