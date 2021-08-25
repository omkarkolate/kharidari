import { Header, SortAndFilter, ProductCard } from "../../components/";
import { useData } from "../../DataContext";
import styles from "./category.module.css";

export function Category() {
	const { state } = useData();

	function getSortedData(products, sortBy) {
		if (sortBy === "PRICE_LOW_TO_HIGH") {
			return [...products].sort((a, b) => a.price - b.price);
		}

		if (sortBy === "PRICE_HIGH_TO_LOW") {
			return [...products].sort((a, b) => b.price - a.price);
		}

		return [...products];
	}

	function getFiltereddata(products, outOfStock, freeDeliveryOnly) {
		return products
			.filter(({ inStock }) => (outOfStock ? true : inStock))
			.filter(({ freeDelivery }) =>
				freeDeliveryOnly ? freeDelivery : true
			);
	}

	const sortedProducts = getSortedData(state.products, state.sortBy);
	const filteredProducts = getFiltereddata(
		sortedProducts,
		state.showOutOfStock,
		state.showFreeDeliveryOnly
	);

	const products = filteredProducts.map(
		({ id, image, name, price, discount }) => (
			<ProductCard
				key={id}
				id={id}
				icon="heart"
				image={image}
				name={name}
				price={price}
				discount={discount}
			/>
		)
	);

	return (
		<div className={styles["category-page"]}>
			<Header brandName searchIcon />
			<SortAndFilter />
			<div className={styles["product-grid"]}>{products}</div>
		</div>
	);
}
