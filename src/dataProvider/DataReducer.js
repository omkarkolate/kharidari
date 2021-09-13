export function dataReducer(state, { type, payload }) {
	switch (type) {
		case "ADD_PRODUCTS":
			return { ...state, products: payload };

		case "SAVE_USER":
			return { ...state, userId: payload._id, ...payload };

		case "UPDATE_USER":
			return { ...state, ...payload };

		case "SORT":
			return { ...state, sortBy: payload };

		case "INCLUDE_OUT_OF_STOCK":
			return { ...state, showOutOfStock: !state.showOutOfStock };

		case "FREE_DELIVERY_ONLY":
			return {
				...state,
				showFreeDeliveryOnly: !state.showFreeDeliveryOnly
			};

		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, payload]
			};

		case "QUANTITY_UPADTE":
			return {
				...state,
				cart: state.cart.map((cartItem) =>
					cartItem._id === payload.id
						? {
								...cartItem,
								quantity: payload.quantity
						  }
						: cartItem
				)
			};

		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(({ _id }) => _id !== payload)
			};

		case "ADD_TO_WISHLIST":
			return {
				...state,
				wishlist: [...state.wishlist, payload]
			};

		case "REMOVE_FROM_WISHLIST":
			return {
				...state,
				wishlist: state.wishlist.filter(({ _id }) => _id !== payload)
			};

		case "ADD_ADDRESS":
			return {
				...state,
				addresses: [...state.addresses, payload]
			};

		case "SELECT_ADDRESS":
			return { ...state, selectedAddress: payload };

		case "REMOVE_ADDRESS":
			return {
				...state,
				addresses: state.addresses.filter(({ _id }) => _id !== payload)
			};

		case "UPDATE_ADDRESS":
			return {
				...state,
				addresses: state.addresses.map((address) =>
					address._id === payload._id ? payload : address
				)
			};

		case "ADD_TO_ORDERS":
			return {
				...state,
				orders: [...payload, ...state.orders]
			};

		case "REMOVE_ALL_FROM_CART":
			return { ...state, cart: payload };

		case "RESET_SORT_FILTER":
			return { ...state, ...payload };

		case "RESET_USER_DATA":
			return { ...state, ...payload };

		default:
			return state;
	}
}
