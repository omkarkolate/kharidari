import { useState } from "react";
import styles from "./login.module.css";
import { useAuth } from "../../AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { fakeAuthApi } from "../../fakeAuthApi";

export function Login() {
	const [formData, setFormData] = useState({
		emailId: "",
		password: ""
	});

	const { setIsUserLogedin } = useAuth();
	const { state } = useLocation();
	const navigate = useNavigate();

	function updateFormData(event) {
		const { id, value } = event.target;
		setFormData({ ...formData, [id]: value });
	}

	const loginWithCredintials = async (emailId, password) => {
		try {
			const response = await fakeAuthApi(emailId, password);
			if (response.success) {
				setIsUserLogedin(true);
				localStorage.setItem(
					"login",
					JSON.stringify({ isUserLogedin: true })
				);
				navigate(state?.from ? state.from : "/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	function loginHandler() {
		loginWithCredintials(formData.emailId, formData.password);
	}

	return (
		<div>
			<header className={styles["login-page-header"]}>Kharidari</header>
			<div>
				<form className={styles["login-form"]}>
					<div className={styles["input-field"]}>
						<label className={styles["label"]} htmlFor="emailId">
							Email id*
						</label>
						<input
							type="text"
							className={styles["text-input"]}
							placeholder="Email id*"
							id="emailId"
							value={formData.emailId}
							onChange={updateFormData}
						/>
					</div>
					<div className={styles["input-field"]}>
						<label className={styles["label"]} htmlFor="password">
							Password*
						</label>
						<input
							type="password"
							className={styles["text-input"]}
							placeholder="Password*"
							id="password"
							value={formData.password}
							onChange={updateFormData}
						/>
					</div>
					<div className={styles["login-btn"]} onClick={loginHandler}>
						Login
					</div>
				</form>
			</div>
		</div>
	);
}
