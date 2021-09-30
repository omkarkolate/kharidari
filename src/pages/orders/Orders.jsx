import { useEffect, useState } from "react";
import { Header, ItemCard, MessageCard } from "../../components/";
import styles from "./orders.module.css";
import { useLoader } from "../../customHooks/useLoader";
import axios from "axios";
import { useData } from "../../dataProvider/DataProvider";

export function Orders() {
	const {
		state: { userId },
		apiURL
	} = useData();
	const [orders, setOrders] = useState([]);
	const { isLoaded, setIsLoaded, error, setError } = useLoader();

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get(`${apiURL}/orders/${userId}`);
				if (data.success) {
					setOrders(data.orders);
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
	}, [userId, setIsLoaded, setError, apiURL]);

	if (error) {
		return (
			<div>
				<Header brandName title="My Orders" />
				<div className="error">
					Error: Something went wrong. :( {error}
				</div>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div>
				<Header brandName title="My Orders" />
				<div className="loading">Loading...</div>
			</div>
		);
	} else {
		const ordersList = orders.map(
			({ _id, product, price, discount, deliveryCharges }) => {
				const finalPrice = price - discount + deliveryCharges;

				return (
					<ItemCard
						key={_id}
						id={_id}
						name={product.name}
						price={finalPrice}
						image={product.image}
						path={`/order-details/${_id}`}
					/>
				);
			}
		);

		return (
			<div>
				<Header brandName title="My Orders" />
				<div className={styles["orders"]}>
					{orders.length > 0 ? (
						<div className={styles["order-list"]}>{ordersList}</div>
					) : (
						<MessageCard message="No orders placed" />
					)}
				</div>
			</div>
		);
	}
}
