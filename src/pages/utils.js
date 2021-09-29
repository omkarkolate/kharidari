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

function validateEmail(emailId) {
	const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegx.test(emailId);
}

function validateMobileNumber(mobileNumber) {
	const mobileNumberRegx = /^[7-9]{1,1}\d{9,9}$/;
	return mobileNumberRegx.test(mobileNumber);
}

export function validate(id, value, formData) {
	switch (id) {
		case "firstName":
		case "lastName":
		case "password":
		case "oldPassword":
		case "name":
		case "pincode":
		case "state":
		case "city":
		case "house":
		case "areaAndRoad":
			return value !== "";

		case "emailId":
			return validateEmail(value);

		case "mobileNumber":
			return validateMobileNumber(value);

		case "confirmPassword":
			return formData.password.value === value;

		default:
			break;
	}
}

export function isAllInputsValid(formData) {
	const inputs = Object.keys(formData);
	for (const input of inputs) {
		if (!formData[input].isValid) {
			return false;
		}
	}
	return true;
}
