import { useEffect } from "react";
import { Header, ProductCard } from "../../components";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { useLoader } from "../../customHooks/useLoader";
import { useData } from "../../dataProvider/DataProvider";
import axios from "axios";

const categories = (
	<section className={styles["categories-section"]}>
		<Link to="category/fashion">
			<div className={styles["category-card"]} role="button">
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						👫
					</span>
				</div>
				<div className={styles["category-name"]}>Fashion</div>
			</div>
		</Link>
		<Link to="category/mobiles">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						📱
					</span>
				</div>
				<div className={styles["category-name"]}>Mobiles</div>
			</div>
		</Link>
		<Link to="category/electronics">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						💻
					</span>
				</div>
				<div className={styles["category-name"]}>Electronics</div>
			</div>
		</Link>
		<Link to="category/home">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						🏠
					</span>
				</div>
				<div className={styles["category-name"]}>Home</div>
			</div>
		</Link>
		<Link to="category/appliances">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						📺
					</span>
				</div>
				<div className={styles["category-name"]}>Appliances</div>
			</div>
		</Link>
		<Link to="category/beauty">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						💄
					</span>
				</div>
				<div className={styles["category-name"]}>Beauty</div>
			</div>
		</Link>
		<Link to="category/Toys">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						🎠
					</span>
				</div>
				<div className={styles["category-name"]}>Toys</div>
			</div>
		</Link>
		<Link to="category/furniture">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						🛋️
					</span>
				</div>
				<div className={styles["category-name"]}>Furniture</div>
			</div>
		</Link>
		<Link to="category/sports">
			<div className={styles["category-card"]}>
				<div className={styles["category-img"]}>
					<span role="img" aria-label="Clothing">
						🏸
					</span>
				</div>
				<div className={styles["category-name"]}>Sports</div>
			</div>
		</Link>
	</section>
);

export function Home() {
	const { isLoaded, setIsLoaded, error, setError } = useLoader();
	const { state, dispatch, apiURL } = useData();

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get(`${apiURL}/products`);
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
	}, [dispatch, setIsLoaded, setError, apiURL]);

	if (error) {
		return (
			<div>
				<Header homepage brandName />
				{categories}
				<hr />
				<div className="error">Error: Somthing Went wrong. :(</div>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div>
				<Header homepage brandName />
				{categories}
				<hr />
				<div className="loading">Loading...</div>
			</div>
		);
	} else {
		const productsList = state.products
			.map((product) => (
				<ProductCard
					key={product._id}
					productId={product._id}
					icon="heart"
					{...product}
				/>
			))
			.slice(0, 8);

		return (
			<div>
				<Header homepage brandName />
				{categories}
				<hr />
				<h4 className="heading">Latest Products</h4>
				<div className={styles["product-grid"]}>{productsList}</div>
			</div>
		);
	}
}
