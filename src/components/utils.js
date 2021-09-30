import axios from "axios";

export async function addOrRemoveFromWishlist(
	inWishlist,
	userId,
	productId,
	dispatch,
	apiURL
) {
	try {
		if (inWishlist) {
			const { data } = await axios.delete(
				`${apiURL}/wishlist/${userId}/${productId}`
			);
			if (data.success) {
				await dispatch({
					type: "REMOVE_FROM_WISHLIST",
					payload: productId
				});
			}
		} else {
			const { data } = await axios.post(
				`${apiURL}/wishlist/${userId}/${productId}`
			);
			if (data.success) {
				await dispatch({
					type: "ADD_TO_WISHLIST",
					payload: data.product
				});
			}
		}
	} catch (error) {
		const {
			response: { data }
		} = error;
		console.log(data.message, data.error);
	}
}
