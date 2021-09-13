import axios from "axios";

export async function addOrRemoveFromWishlist(
	inWishlist,
	userId,
	productId,
	dispatch
) {
	try {
		if (inWishlist) {
			const { data } = await axios.delete(
				`https://kharidari.omkarkolate.repl.co/wishlist/${userId}/${productId}`
			);
			if (data.success) {
				dispatch({
					type: "REMOVE_FROM_WISHLIST",
					payload: productId
				});
			}
		} else {
			const { data } = await axios.post(
				`https://kharidari.omkarkolate.repl.co/wishlist/${userId}/${productId}`
			);
			if (data.success) {
				dispatch({
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
