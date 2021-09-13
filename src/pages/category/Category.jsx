import { useEffect } from "react";
import { Header, SortAndFilter, ProductCard } from "../../components/";
import { useData } from "../../dataProvider/DataProvider";
import { getSortedData, getFiltereddata } from "../utils";
import { useLoader } from "../../customHooks/useLoader";
import styles from "./category.module.css";
import axios from "axios";

export function Category() {
	const { isLoaded, setIsLoaded, error, setError } = useLoader();
	const { state, dispatch } = useData();

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get(
					"https://kharidari.omkarkolate.repl.co/products"
				);
				if (data.success) {
					await dispatch({
						type: "ADD_PRODUCTS",
						payload: data.products
					});
					setIsLoaded(true);
				}
			} catch (error) {
				const {
					response: { data }
				} = error;
				console.log(data.message, data.error);
				setIsLoaded(true);
				setError(data.message);
			}
		})();

		return () => {
			dispatch({
				type: "RESET_SORT_FILTER",
				payload: {
					showOutOfStock: false,
					showFreeDeliveryOnly: false,
					sortBy: null
				}
			});
		};
	}, [dispatch, setIsLoaded, setError]);

	if (error) {
		return (
			<div className={styles["category-page"]}>
				<Header brandName searchIcon />
				<div className="error">Error: Somthing Went wrong. :(</div>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div className={styles["category-page"]}>
				<Header brandName searchIcon />
				<div className="loading">Loading...</div>
			</div>
		);
	} else {
		const sortedProducts = getSortedData(state.products, state.sortBy);
		const filteredProducts = getFiltereddata(
			sortedProducts,
			state.showOutOfStock,
			state.showFreeDeliveryOnly
		);

		const products = filteredProducts.map((product) => (
			<ProductCard
				key={product._id}
				productId={product._id}
				icon="heart"
				{...product}
			/>
		));

		return (
			<div className={styles["category-page"]}>
				<Header brandName searchIcon />
				<SortAndFilter />
				<div className={styles["product-grid"]}>{products}</div>
			</div>
		);
	}
}
