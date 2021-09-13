import { Header, ProductCard, MessageCard } from "../../components/";
import styles from "./wishlist.module.css";
import { useData } from "../../dataProvider/DataProvider";

export function Wishlist() {
	const {
		state: { wishlist }
	} = useData();

	const products = wishlist.map((product) => (
		<ProductCard
			key={product._id}
			productId={product._id}
			icon="trash"
			{...product}
		/>
	));

	return (
		<div className={styles["wishlist-page"]}>
			<Header brandName title="My Wishlist" />
			{wishlist.length > 0 ? (
				<div className={styles["product-grid"]}>{products}</div>
			) : (
				<MessageCard message="Add as you wish" />
			)}
		</div>
	);
}
