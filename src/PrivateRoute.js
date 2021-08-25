import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function PrivateRoute({ path, ...props }) {
	const { isUserLogedin } = useAuth();

	return isUserLogedin ? (
		<Route path={path} {...props} />
	) : (
		<Navigate replace to="/login" state={{ from: path }} />
	);
}
