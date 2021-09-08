import { Header, ItemCard } from "../../components/";
import styles from "./orders.module.css";
import { useData } from "../../dataProvider/DataProvider";

export function Orders() {
	const {
		state: { products, orders }
	} = useData();

	const ordersList = orders.map(({ id, productId, priceDetails }) => {
		const product = products.find(({ id }) => id === productId);
		const price =
			priceDetails.price -
			priceDetails.discount +
			priceDetails.deliveryCharges;

		return (
			<ItemCard
				key={id}
				id={id}
				name={product.name}
				price={price}
				image={product.image}
				path={`/order-details/${id}`}
			/>
		);
	});

	return (
		<div>
			<Header brandName title="My Orders" />
			<div className={styles["orders"]}>
				<div className={styles["order-list"]}>{ordersList}</div>
			</div>
		</div>
	);
}
