import { Header } from "../../components/";
import styles from "./productDetails.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useData } from "../../dataProvider/DataProvider";
import { useAuth } from "../../authProvider/AuthProvider";

export function ProductDetails() {
	const { state, dispatch } = useData();
	const { isUserLogedin } = useAuth();
	const productId = useParams();
	const navigate = useNavigate();

	const product = state.products.find(({ id }) => id === productId.id);

	const inWishlist = state.wishlist.find(({ id }) => id === productId.id);

	const inCart = state.cart.find(({ id }) => id === productId.id);

	const discountedPrice = Math.round(
		product.price - (product.discount * product.price) / 100
	);

	function addToCart(product) {
		if (!inCart) {
			dispatch({ type: "ADD_TO_CART", payload: product });
		}
	}

	function buyNow(product) {
		if (!isUserLogedin) {
			navigate("/login", {
				replace: true,
				state: { from: `/product-detail/${productId.id}` }
			});
		} else {
			if (!inCart) {
				dispatch({ type: "ADD_TO_CART", payload: product });
				navigate(`/checkout/${productId.id}`);
			} else {
				navigate(`/checkout/${productId.id}`);
			}
		}
	}

	function addOrRemoveFromWishlist(id) {
		inWishlist
			? dispatch({
					type: "REMOVE_FROM_WISHLIST",
					payload: id
			  })
			: dispatch({
					type: "ADD_TO_WISHLIST",
					payload: id
			  });
	}

	const heartIcon = (
		<div
			className={styles["wishlist-action-btn"]}
			onClick={() => addOrRemoveFromWishlist(product.id)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`icon icon-tabler icon-tabler-heart`}
				width="32"
				height="32"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke={inWishlist ? "red" : "#9e9e9e"}
				fill={inWishlist ? "red" : "none"}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
			</svg>
		</div>
	);

	return (
		<div>
			<Header brandName />
			<div className={styles["wrapper"]}>
				<div className={styles["product-img"]}>
					<img src={product.image} alt={product.name} />
					{isUserLogedin && heartIcon}
					<div className={styles["product-page-actions"]}>
						<div className={styles["add-to-cart-btn"]}>
							<Link to={inCart ? "/cart" : ""}>
								<div
									className={styles["add-to-cart"]}
									onClick={() => addToCart(product)}
								>
									{inCart ? "GO TO CART" : "ADD TO CART"}
								</div>
							</Link>
						</div>
						<div className={styles["buy-now-btn"]}>
							<div
								className={styles["buy-now"]}
								onClick={() => buyNow(product)}
							>
								BUY NOW
							</div>
						</div>
					</div>
				</div>
				<div className={styles["product-metadata"]}>
					<div className={styles["product-name"]}>{product.name}</div>
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
								<div className={styles["type"]}>Material</div>
								<div className={styles["value"]}>
									{product.material}
								</div>
							</div>
							<div className={styles["row"]}>
								<div className={styles["type"]}>Pattern</div>
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
