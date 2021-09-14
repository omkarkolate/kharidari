import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, ItemCard, AddressCard, PriceDetails } from "../../components/";
import { useData } from "../../dataProvider/DataProvider";
import styles from "./orders.module.css";
import { useLoader } from "../../customHooks/useLoader";
import axios from "axios";

export function OrderDetails() {
	const {
		state: { userId },
		apiURL
	} = useData();
	const { orderId } = useParams();
	const [order, setOrder] = useState([]);
	const { isLoaded, setIsLoaded, error, setError } = useLoader();

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get(
					`${apiURL}/orders/${userId}/${orderId}`
				);
				if (data.success) {
					setOrder(data.order);
				}
				setIsLoaded(true);
			} catch (error) {
				const {
					response: { data }
				} = error;
				console.log(data.message, data.error);
				setError(`${data.message}. ${data.error}`);
				setIsLoaded(true);
			}
		})();
	}, [userId, setIsLoaded, setError, orderId]);

	if (error) {
		return (
			<div>
				<Header brandName title="Orders Details" />
				<div className="error">
					Error: Something went wrong. :( {error}
				</div>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div>
				<Header brandName title="Orders Details" />
				<div className="loading">Loading...</div>
			</div>
		);
	} else {
		const {
			_id,
			product,
			price,
			discount,
			deliveryCharges,
			address,
			quantity
		} = order;

		const finalPrice = price - discount + deliveryCharges;

		return (
			<div className={styles["page"]}>
				<Header brandName title="Orders Details" />
				<div className={styles["order-details-wrapper"]}>
					<ItemCard
						key={_id}
						id={_id}
						name={product.name}
						price={finalPrice}
						image={product.image}
						path={`/product-details/${product._id}`}
					/>
					<div className={styles["delivery-address"]}>
						<AddressCard address={address} />
					</div>
					<PriceDetails
						price={price}
						discount={discount}
						deliveryCharges={deliveryCharges}
						items={quantity}
					/>
				</div>
			</div>
		);
	}
}
