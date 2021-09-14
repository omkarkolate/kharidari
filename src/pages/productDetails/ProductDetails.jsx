import { Header } from "../../components/";
import styles from "./productDetails.module.css";
import { useParams } from "react-router-dom";
import { useAuth } from "../../authProvider/AuthProvider";
import { useLoader } from "../../customHooks/useLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import { HeartIconBtn, ProductDetailsActionBar } from "../../components/index";
import { useData } from "../../dataProvider/DataProvider";

export function ProductDetails() {
	const { isUserLogedin } = useAuth();
	const { productId } = useParams();
	const { isLoaded, setIsLoaded, error, setError } = useLoader();
	const [product, setProduct] = useState(null);
	const { apiURL } = useData();

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get(
					`${apiURL}/products/${productId}`
				);
				if (data.success) {
					setProduct(data.product);
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
	}, [setError, setIsLoaded, productId, apiURL]);

	if (error) {
		return (
			<div>
				<Header brandName />
				<div className="error">Error: Somthing went wrong... :(</div>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div>
				<Header brandName />
				<div className="loading">Loading...</div>
			</div>
		);
	} else {
		const discountedPrice = Math.round(
			product.price - (product.discount * product.price) / 100
		);
		return (
			<div>
				<Header brandName />
				<div className={styles["wrapper"]}>
					<div className={styles["product-img"]}>
						<img src={product.image} alt={product.name} />
						{isUserLogedin && (
							<HeartIconBtn productId={productId} />
						)}
						<ProductDetailsActionBar product={product} />
					</div>
					<div className={styles["product-metadata"]}>
						<div className={styles["product-name"]}>
							{product.name}
						</div>
						<div className={styles["price-and-discount"]}>
							<div className={styles["product-price"]}>
								₹{discountedPrice}
							</div>
							<div className={styles["actual-price"]}>
								{product.price}
							</div>
							<div className={styles["discount"]}>
								{product.discount}% off
							</div>
						</div>
						<div className={styles["product-details"]}>
							<div className={styles["product-details-heading"]}>
								Product Details
							</div>
							<div className={styles["details"]}>
								<div className={styles["row"]}>
									<div className={styles["type"]}>
										Material
									</div>
									<div className={styles["value"]}>
										{product.material}
									</div>
								</div>
								<div className={styles["row"]}>
									<div className={styles["type"]}>
										Pattern
									</div>
									<div className={styles["value"]}>
										{product.pattern}
									</div>
								</div>
								<div className={styles["row"]}>
									<div className={styles["type"]}>Color</div>
									<div className={styles["value"]}>
										{product.color}
									</div>
								</div>
								<div className={styles["row"]}>
									<div className={styles["type"]}>Type</div>
									<div className={styles["value"]}>
										{product.type}
									</div>
								</div>
							</div>
							<div className={styles["product-details-heading"]}>
								Description
							</div>
							<div className={styles["description"]}>
								{product.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
