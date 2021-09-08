import {
	Header,
	ShopNow,
	ItemCard,
	PriceDetails,
	BottomActionBar
} from "../../components/";
import styles from "./cart.module.css";
import { useData } from "../../dataProvider/DataProvider";
import { useNavigate } from "react-router-dom";
import { getPricetDetails } from "../utils";

export function Cart() {
	const {
		state: { cart }
	} = useData();

	const navigate = useNavigate();

	function gotoCheckout() {
		navigate("/checkout");
	}

	const productsInCart = cart.map(
		(product) => (
			<ItemCard
				key={product.id}
				{...product}
				path={`/product-details/${product.id}`}
				showActionBtns
			/>
		)
	);

	const { price, discount, deliveryCharges } = cart.reduce(getPricetDetails, {
		price: 0,
		discount: 0,
		deliveryCharges: 0
	});

	return (
		<div className={styles["cart-page"]}>
			<Header brandName title="My Cart" />
			{cart.length > 0 ? (
				<div className={styles["cart-flex-wrapper"]}>
					<div className={styles["cart-product-list"]}>
						{productsInCart}
						<BottomActionBar
							buttonText="Place Order"
							totalAmount={price - discount + deliveryCharges}
							callback={gotoCheckout}
						/>
					</div>
					<PriceDetails
						price={price}
						discount={discount}
						deliveryCharges={deliveryCharges}
						items={cart.length}
					/>
				</div>
			) : (
				<ShopNow message="Cart is Empty" />
			)}
		</div>
	);
}
