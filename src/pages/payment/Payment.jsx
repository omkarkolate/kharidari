import { Header, PriceDetails, BottomActionBar } from "../../components/";
import styles from "./payment.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../dataProvider/DataProvider";
import { getPricetDetails } from "../utils";
import axios from "axios";

export function Payment() {
	const {
		state: { userId, cart },
		dispatch, apiURL
	} = useData();

	const { state: routerState } = useLocation();

	const {
		productId,
		deliveryAddress,
		priceDetails
	} = routerState.orderDetails;

	const navigate = useNavigate();

	async function addToOrders() {
		if (productId) {
			const { quantity } = cart.find(({ _id }) => _id === productId);
			try {
				const { data } = await axios.post(
					`${apiURL}/orders/${userId}`,
					{
						product: productId,
						quantity,
						address: deliveryAddress,
						...priceDetails
					}
				);
				if (data.success) {
					await dispatch({
						type: "REMOVE_FROM_CART",
						payload: productId
					});
				}
				navigate("/successful");
			} catch (error) {
				const {
					response: { data }
				} = error;
				console.log(data.messsage, data.error);
			}
		} else {
			const newOrders = cart.map(({ product, quantity }) => {
				const priceDetails = getPricetDetails(
					{
						price: 0,
						discount: 0,
						deliveryCharges: 0
					},
					{ product, quantity }
				);
				return {
					product: product._id,
					quantity,
					address: deliveryAddress,
					...priceDetails
				};
			});

			try {
				const {
					data
				} = await axios.post(
					`${apiURL}/orders/multiple/${userId}`,
					{ newOrders }
				);
				if (data.success) {
					await dispatch({
						type: "REMOVE_ALL_FROM_CART",
						payload: []
					});
				}
				navigate("/successful");
			} catch (error) {
				const {
					response: { data }
				} = error;
				console.log(data.messsage, data.error);
			}
		}
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
