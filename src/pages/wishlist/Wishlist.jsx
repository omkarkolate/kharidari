import { Header, ProductCard, ShopNow } from "../../components/";
import styles from "./wishlist.module.css";
import { useData } from "../../dataProvider/DataProvider";

export function Wishlist() {
	const {
		state: { wishlist }
	} = useData();

	const products = wishlist.map(({ id, image, name, price, discount }) => (
		<ProductCard
			key={id}
			id={id}
			icon="trash"
			image={image}
			name={name}
			price={price}
			discount={discount}
		/>
	));

	return (
		<div className={styles["wishlist-page"]}>
			<Header brandName title="My Wishlist" />
			{wishlist.length > 0 ? (
				<div className={styles["product-grid"]}>{products}</div>
			) : (
				<ShopNow message="Add as you wish" />
			)}
		</div>
	);
}
