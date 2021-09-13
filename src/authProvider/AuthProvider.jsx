import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useData } from "../dataProvider/DataProvider";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [isUserLogedin, setIsUserLogedin] = useState(false);
	const { state, dispatch } = useData();

	useEffect(() => {
		(async function () {
			const login = JSON.parse(localStorage.getItem("login"));
			if (login?.isUserLogedin) {
				if (!state.userId) {
					try {
						const { data } = await axios.get(
							`https://kharidari.omkarkolate.repl.co/users/${login?.userId}`
						);
						dispatch({ type: "SAVE_USER", payload: data.user });
					} catch (error) {
						const {
							response: { data }
						} = error;
						console.log(data.message);
					}
				}
				setIsUserLogedin(true);
			}
		})();
	}, [state.userId, dispatch]);

	const loginWithCredintials = async (emailId, password) => {
		try {
			const { data } = await axios.post(
				"https://kharidari.omkarkolate.repl.co/login",
				{
					emailId,
					password
				}
			);

			if (data.success) {
				setIsUserLogedin(true);
				localStorage.setItem(
					"login",
					JSON.stringify({
						isUserLogedin: true,
						userId: data.user._id
					})
				);
				return data;
			}
		} catch (error) {
			const {
				response: { data }
			} = error;
			console.log(data.message, data.error);
			return data;
		}
	};

	function logout() {
		setIsUserLogedin(false);
		localStorage.removeItem("login");
		dispatch({
			type: "RESET_USER_DATA",
			payload: {
				userId: "",
				firstName: "",
				lastName: "",
				mobileNumber: "",
				emailId: "",
				cart: [],
				wishlist: [],
				addresses: [],
				selectedAddress: "",
				orders: []
			}
		});
	}

	return (
		<AuthContext.Provider
			value={{ isUserLogedin, loginWithCredintials, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}
