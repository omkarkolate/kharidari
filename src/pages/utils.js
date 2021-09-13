export function getPricetDetails(
	{ price, discount, deliveryCharges },
	{ product, quantity }
) {
	const currentDiscount = Math.round(
		(parseFloat(product.price, 10) * quantity * product.discount) / 100
	);

	const currentPrice = Math.round(parseFloat(product.price, 10) * quantity);
	const currentDeliveryCharges = product.freeDelivery ? 0 : 50;

	return {
		price: price + currentPrice,
		discount: discount + currentDiscount,
		deliveryCharges: deliveryCharges + currentDeliveryCharges
	};
}

export function getSortedData(products, sortBy) {
	if (sortBy === "PRICE_LOW_TO_HIGH") {
		return [...products].sort((a, b) => a.price - b.price);
	}

	if (sortBy === "PRICE_HIGH_TO_LOW") {
		return [...products].sort((a, b) => b.price - a.price);
	}

	return [...products];
}

export function getFiltereddata(products, outOfStock, freeDeliveryOnly) {
	return products
		.filter(({ inStock }) => (outOfStock ? true : inStock))
		.filter(({ freeDelivery }) => (freeDeliveryOnly ? freeDelivery : true));
}
