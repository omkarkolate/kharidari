import { createContext, useContext, useEffect, useState } from "react";
import { fakeAuthApi } from "./fakeAuthApi";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [isUserLogedin, setIsUserLogedin] = useState(false);

	useEffect(() => {
		const login = JSON.parse(localStorage.getItem("login"));
		if (login?.isUserLogedin) setIsUserLogedin(true);
	}, []);

	const loginWithCredintials = async (emailId, password) => {
		try {
			const response = await fakeAuthApi(emailId, password);
			if (response.success) {
				setIsUserLogedin(true);
				localStorage.setItem(
					"login",
					JSON.stringify({ isUserLogedin: true })
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	function logout() {
		setIsUserLogedin(false);
		localStorage.setItem("login", JSON.stringify({ isUserLogedin: false }));
	}

	return (
		<AuthContext.Provider
			value={{ isUserLogedin, loginWithCredintials, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}
