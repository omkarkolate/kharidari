import {
	Header,
	ItemCard,
	PriceDetails,
	AddressCard,
	BottomActionBar
} from "../../components/";
import styles from "./checkout.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../dataProvider/DataProvider";
import { getPricetDetails } from "../utils";

export function Checkout() {
	const {
		state: { cart, addresses, selectedAddress }
	} = useData();
	const navigate = useNavigate();
	const { productId } = useParams();

	function changeOrAddAddress() {
		if (productId) {
			navigate("/select-address", {
				state: { fromCheckout: `/checkout/${productId}` }
			});
		} else {
			navigate("/select-address", {
				state: { fromCheckout: "/checkout" }
			});
		}
	}

	function gotoPayment(deliveryAddress, priceDetails) {
		if (productId) {
			navigate("/payment", {
				state: {
					orderDetails: {
						productId,
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

	const deliveryAddress = addresses.find(
		({ _id }) => _id === selectedAddress
	);

	let productsInCheckout, priceDetails;

	if (productId) {
		const { product, quantity } = cart.find(({ _id }) => _id === productId);

		productsInCheckout = (
			<ItemCard id={product._id} quantity={quantity} {...product} />
		);
		priceDetails = getPricetDetails(
			{
				price: 0,
				discount: 0,
				deliveryCharges: 0
			},
			{ product, quantity }
		);
	} else {
		productsInCheckout = cart.map(({ product, quantity }) => (
			<ItemCard
				key={product._id}
				id={product._id}
				quantity={quantity}
				{...product}
			/>
		));

		priceDetails = cart.reduce(getPricetDetails, {
			price: 0,
			discount: 0,
			deliveryCharges: 0
		});
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
							callback={() =>
								gotoPayment(deliveryAddress, priceDetails)
							}
						/>
					</div>
				</div>
				<PriceDetails
					{...priceDetails}
					items={productId ? 1 : cart.length}
				/>
			</div>
		</div>
	);
}
