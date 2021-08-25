export function getPricetDetails(
	{ price, discount, deliveryCharges },
	product
) {
	const currentDiscount = Math.round(
		(product.price * product.quantity * product.discount) / 100
	);

	const currentPrice = Math.round(product.price * product.quantity);
	const currentDeliveryCharges = product.freeDelivery ? 0 : 50;

	return {
		price: price + currentPrice,
		discount: discount + currentDiscount,
		deliveryCharges: deliveryCharges + currentDeliveryCharges
	};
}
