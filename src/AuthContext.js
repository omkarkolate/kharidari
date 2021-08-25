import { createContext, useContext, useEffect, useState } from "react";

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

	return (
		<AuthContext.Provider value={{ isUserLogedin, setIsUserLogedin }}>
			{children}
		</AuthContext.Provider>
	);
}
