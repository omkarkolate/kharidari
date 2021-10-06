import { useState } from "react";
import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../customHooks/useLoader";
import axios from "axios";
import { useData } from "../../dataProvider/DataProvider";
import { validate, isAllInputsValid } from "../utils";

export function SignUp() {
	const [formData, setFormData] = useState({
		firstName: { value: "", isValid: null, className: "text-input" },
		lastName: { value: "", isValid: null, className: "text-input" },
		emailId: { value: "", isValid: null, className: "text-input" },
		password: { value: "", isValid: null, className: "text-input" },
		confirmPassword: { value: "", isValid: null, className: "text-input" }
	});
	const [validationError, setValidationError] = useState(null);
	const { isLoaded, setIsLoaded, error, setError } = useLoader();
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();
	const { apiURL } = useData();

	function updateFormData(event) {
		if (validationError) setValidationError(null);
		if (error) setError(null);

		const { id, value } = event.target;
		const isValid = validate(id, value, formData);
		const className = isValid ? "text-input-valid" : "text-input-invalid";
		setFormData({ ...formData, [id]: { value, isValid, className } });
	}

	async function signUp() {
		if (!isAllInputsValid(formData)) {
			setValidationError("Please fill the required information");
			return;
		}
		try {
			setIsLoaded(true);
			const { data } = await axios.post(`${apiURL}/signup`, {
				firstName: formData.firstName.value,
				lastName: formData.lastName.value,
				emailId: formData.emailId.value,
				password: formData.password.value
			});
			if (data.success) {
				setIsLoaded(false);
				setMessage(data.message);
			}
		} catch (error) {
			const {
				response: { data }
			} = error;
			setIsLoaded(false);
			setError(data.message);
		}
	}

	function gotoLogin() {
		navigate("/login");
	}

	return (
		<div>
			<header className={styles["login-page-header"]}>Kharidari</header>
			<div>
				<form className={styles["login-form"]}>
					<div className={styles["input-field"]}>
						<label className={styles["label"]} htmlFor="firstName">
							First name*
						</label>
						<input
							type="text"
							className={styles[formData.firstName.className]}
							placeholder="First name*"
							id="firstName"
							value={formData.firstName.value}
							onChange={updateFormData}
						/>
					</div>
					<div className={styles["input-field"]}>
						<label className={styles["label"]} htmlFor="lastName">
							Last Name*
						</label>
						<input
							type="text"
							className={styles[formData.lastName.className]}
							placeholder="Last Name*"
							id="lastName"
							value={formData.lastName.value}
							onChange={updateFormData}
						/>
					</div>
					<div className={styles["input-field"]}>
						<label className={styles["label"]} htmlFor="emailId">
							Email id*
						</label>
						<input
							type="text"
							className={styles[formData.emailId.className]}
							placeholder="Email id*"
							id="emailId"
							value={formData.emailId.value}
							onChange={updateFormData}
						/>
					</div>
					<div className={styles["input-field"]}>
						<label className={styles["label"]} htmlFor="password">
							Password*
						</label>
						<input
							type="password"
							className={styles[formData.password.className]}
							placeholder="Password*"
							id="password"
							value={formData.password.value}
							onChange={updateFormData}
						/>
					</div>
					<div className={styles["input-field"]}>
						<label
							className={styles["label"]}
							htmlFor="confirmPassword"
						>
							Confirm Password*
						</label>
						<input
							type="password"
							className={
								styles[formData.confirmPassword.className]
							}
							placeholder="Retype Password*"
							id="confirmPassword"
							value={formData.confirmPassword.value}
							onChange={updateFormData}
						/>
					</div>
					<div className={styles["login-btn"]} onClick={signUp}>
						{isLoaded ? "Siging Up..." : "Sign Up"}
					</div>
					<div className="error">{validationError}</div>
					<div className="loading">
						{message && (
							<div>
								Successfully Signed up, now login.
								<div
									className={styles["login-btn"]}
									onClick={gotoLogin}
								>
									Go to Login
								</div>
							</div>
						)}
					</div>
					<div className={styles["login-link"]} onClick={gotoLogin}>
						{!message && "Log in"}
					</div>
					<div className="error">{error}</div>
				</form>
			</div>
		</div>
	);
}
