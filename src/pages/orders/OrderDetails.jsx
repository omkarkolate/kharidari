import { useParams } from "react-router-dom";
import { Header, ItemCard, AddressCard, PriceDetails } from "../../components/";
import { useData } from "../../DataContext";
import styles from "./orders.module.css";

export function OrderDetails() {
	const {
		state: { orders, products }
	} = useData();
	const orderId = useParams();

	const order = orders.find(({ id }) => id === orderId.id);

	const { id, productId, priceDetails, deliveryAddress } = order;

	const product = products.find(({ id }) => id === productId);

	const price =
		priceDetails.price -
		priceDetails.discount +
		priceDetails.deliveryCharges;

	return (
		<div className={styles["page"]}>
			<Header brandName title="Orders Details" />
			<div className={styles["order-details-wrapper"]}>
				<ItemCard
					key={id}
					id={id}
					name={product.name}
					price={price}
					image={product.image}
					path={`/product-details/${product.id}`}
				/>
				<div className={styles["delivery-address"]}>
					<AddressCard address={deliveryAddress} />
				</div>
				<PriceDetails {...priceDetails} items="1" />
			</div>
		</div>
	);
}
