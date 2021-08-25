import {
	Header,
	ItemCard,
	PriceDetails,
	AddressCard,
	BottomActionBar
} from "../../components/";
import styles from "./checkout.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../DataContext";
import { getPricetDetails } from "../utils";

export function Checkout() {
	const {
		state: { cart, addresses, selectedAddress }
	} = useData();

	const navigate = useNavigate();
	const productId = useParams();

	const deliveryAddress = addresses.find(({ id }) => id === selectedAddress);

	let productsInCheckout, priceDetails;

	if (productId.id) {
		const product = cart.find(({ id }) => id === productId.id);

		productsInCheckout = <ItemCard {...product} />;
		priceDetails = getPricetDetails(
			{
				price: 0,
				discount: 0,
				deliveryCharges: 0
			},
			product
		);
	} else {
		productsInCheckout = cart.map((product) => (
			<ItemCard key={product.id} {...product} />
		));

		priceDetails = cart.reduce(getPricetDetails, {
			price: 0,
			discount: 0,
			deliveryCharges: 0
		});
	}

	function changeOrAddAddress() {
		if (productId.id) {
			navigate("/address", {
				state: { fromCheckout: `/checkout/${productId.id}` }
			});
		} else {
			navigate("/address", {
				state: { fromCheckout: "/checkout" }
			});
		}
	}

	function gotoPayment() {
		if (productId.id) {
			navigate("/payment", {
				state: {
					orderDetails: {
						productId: productId.id,
						deliveryAddress,
						priceDetails
					}
				}
			});
		} else {
			navigate("/payment", {
				state: {
					orderDetails: {
						deliveryAddress,
						priceDetails
					}
				}
			});
		}
	}

	const totalAmount =
		priceDetails.price -
		priceDetails.discount +
		priceDetails.deliveryCharges;

	return (
		<div className={styles["checkout-page"]}>
			<Header brandName title="Order Details" />

			<div className={styles["cart-flex-wrapper"]}>
				<div className={styles["checkout-flex-left"]}>
					<div className={styles["delivery-address"]}>
						{deliveryAddress && (
							<AddressCard address={deliveryAddress} />
						)}
						<div
							className={styles["change-address-btn"]}
							onClick={changeOrAddAddress}
						>
							Change or Add Address
						</div>
					</div>

					<div className={styles["product-list"]}>
						{productsInCheckout}

						<BottomActionBar
							buttonText="CONTINUE"
							totalAmount={totalAmount}
							callback={gotoPayment}
						/>
					</div>
				</div>
				<PriceDetails
					{...priceDetails}
					items={productId.id ? 1 : cart.length}
				/>
			</div>
		</div>
	);
}
