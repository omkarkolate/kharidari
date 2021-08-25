import faker from "faker";
import { createContext, useContext, useEffect } from "react";
import { useDataReducer } from "./DataReducer";

const DataContext = createContext();

export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	const [state, dispatch] = useDataReducer();

	useEffect(() => {
		faker.seed(123);
		const products = [...Array(50)].map((item) => ({
			id: faker.datatype.uuid(),
			image: faker.random.image(),
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			material: faker.commerce.productMaterial(),
			type: faker.commerce.product(),
			pattern: faker.commerce.productAdjective(),
			color: faker.commerce.color(),
			description: faker.commerce.productDescription(),
			inStock: faker.datatype.boolean(),
			freeDelivery: faker.datatype.boolean(),
			discount: faker.random.arrayElement([5, 10, 20])
		}));

		dispatch({ type: "ADD_PRODUCTS", payload: products });
	}, [dispatch]);

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
}
