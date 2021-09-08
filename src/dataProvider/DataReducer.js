import { useReducer } from "react";

export function dataReducer(state, action) {
	switch (action.type) {
		case "ADD_PRODUCTS":
			return { ...state, products: action.payload };

		case "SORT":
			return { ...state, sortBy: action.payload };

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
				cart: [...state.cart, { ...action.payload, quantity: 1 }]
			};

		case "QUANTITY_UPADTE":
			return {
				...state,
				cart: state.cart.map((product) =>
					product.id === action.payload.id
						? { ...product, quantity: action.payload.quantity }
						: product
				)
			};

		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(({ id }) => id !== action.payload)
			};

		case "MOVE_TO_WISHLIST":
			return {
				...state,
				wishlist: [
					...state.wishlist,
					state.products.find(({ id }) => id === action.payload)
				],
				cart: state.cart.filter(({ id }) => id !== action.payload)
			};

		case "ADD_TO_WISHLIST":
			return {
				...state,
				wishlist: [
					...state.wishlist,
					state.products.find(({ id }) => id === action.payload)
				]
			};

		case "REMOVE_FROM_WISHLIST":
			return {
				...state,
				wishlist: state.wishlist.filter(
					({ id }) => id !== action.payload
				)
			};

		case "ADD_ADDRESS":
			return {
				...state,
				addresses: [...state.addresses, action.payload]
			};

		case "SELECT_ADDRESS":
			return {
				...state,
				selectedAddress: action.payload
			};

		case "REMOVE_ADDRESS":
			return {
				...state,
				addresses: state.addresses.filter(
					({ id }) => id !== action.payload
				)
			};

		case "UPDATE_ADDRESS":
			return {
				...state,
				addresses: state.addresses.map((address) =>
					address.id === action.payload.id ? action.payload : address
				)
			};

		case "ADD_TO_ORDERS":
			return {
				...state,
				orders: [...action.payload, ...state.orders]
			};

		case "REMOVE_ALL_FROM_CART":
			return {
				...state,
				cart: action.payload
			};

		default:
			return state;
	}
}

export function useDataReducer() {
	const [state, dispatch] = useReducer(dataReducer, {
		showOutOfStock: false,
		showFreeDeliveryOnly: false,
		sortBy: null,
		cart: [],
		wishlist: [],
		products: [],
		addresses: [
			{
				id: "0dffe3-aac-dc2f-0ae2-23826331f2c",
				fullName: "Omkar Kolate",
				mobile: "8545985245",
				pincode: "420101",
				state: "Maharashtra",
				city: "Kolhapur",
				house: "Mauli",
				roadAndArea: "Main road, Rampur"
			},
			{
				id: "0b714eb-b31-e07-d35-f34c7726ae6",
				fullName: "Vidya Kolate",
				mobile: "7745982544",
				pincode: "412105",
				state: "Maharashtra",
				city: "Pune",
				house: "A-802, Splendid Park",
				roadAndArea: "Moshi road, Dudulgoan"
			}
		],
		selectedAddress: "",
		orders: []
	});

	return [state, dispatch];
}
