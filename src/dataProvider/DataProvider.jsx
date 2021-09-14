import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "./DataReducer";

const DataContext = createContext();

export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	const [state, dispatch] = useReducer(dataReducer, {
		showOutOfStock: false,
		showFreeDeliveryOnly: false,
		sortBy: null,
		products: [],
		userId: "",
		firstName: "",
		lastName: "",
		mobileNumber: "",
		emailId: "",
		password: "",
		cart: [],
		wishlist: [],
		addresses: [],
		selectedAddress: "",
		orders: []
	});

	const apiURL = process.env["apiURL"];

	return (
		<DataContext.Provider value={{ state, dispatch, apiURL }}>
			{children}
		</DataContext.Provider>
	);
}
