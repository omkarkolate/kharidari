import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/";
import { useLoader } from "../../customHooks/useLoader";
import { useData } from "../../dataProvider/DataProvider";
import { Link } from "react-router-dom";
import styles from "./profile.module.css";
import { validate, isAllInputsValid } from "../utils";

export function Profile() {
	const [formData, setFormData] = useState({
		firstName: { value: "", isValid: null, className: "text-input" },
		lastName: { value: "", isValid: null, className: "text-input" },
		emailId: { value: "", isValid: null, className: "text-input" },
		mobileNumber: { value: "", isValid: null, className: "text-input" }
	});

	const { state, dispatch, apiURL } = useData();
	const { isLoaded, setIsLoaded, error, setError } = useLoader();
	const [validationError, setValidationError] = useState(null);

	useEffect(() => {
		setFormData((prevFormData) => ({
			firstName: {
				...prevFormData.firstName,
				value: state.firstName,
				isValid: true
			},
			lastName: {
				...prevFormData.lastName,
				value: state.lastName,
				isValid: true
			},
			emailId: {
				...prevFormData.emailId,
				value: state.emailId,
				isValid: true
			},
			mobileNumber: {
				...prevFormData?.mobileNumber,
				value: state?.mobileNumber,
				isValid: state?.mobileNumber ? true : null
			}
		}));
	}, [state]);

	function updateFormData(event) {
		if (validationError) setValidationError(null);
		if (error) setError(null);

		const { id, value } = event.target;
		const isValid = validate(id, value, formData);
		const className = isValid ? "text-input-valid" : "text-input-invalid";
		setFormData({ ...formData, [id]: { value, isValid, className } });
	}

	async function updateUserProfile() {
		if (!isAllInputsValid(formData)) {
			setValidationError("Please fill the required information");
			return;
		}
		try {
			setIsLoaded(true);
			const { data } = await axios.put(
				`${apiURL}/users/${state.userId}`,
				{
					firstName: formData.firstName.value,
					lastName: formData.lastName.value,
					emailId: formData.emailId.value,
					mobileNumber: formData.mobileNumber.value
				}
			);
			if (data.success) {
				const {
					firstName,
					lastName,
					mobileNumber,
					emailId
				} = data.user;
				await dispatch({
					type: "UPDATE_USER",
					payload: {
						firstName,
						lastName,
						mobileNumber,
						emailId
					}
				});
			}
			setIsLoaded(false);
		} catch (error) {
			const {
				response: { data }
			} = error;
			console.log(data.message, data.error);
			setError(`${data.message}. ${data.error}`);
			setIsLoaded(false);
		}
	}

	return (
		<div>
			<Header title="My Profile" />
			<form className={styles["profile-form"]}>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="firstName">
						First Name*
					</label>
					<input
						type="text"
						className={styles[formData.firstName.className]}
						placeholder="First Name*"
						id="firstName"
						value={formData.firstName.value}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="lastName">
						Last Name
					</label>
					<input
						type="text"
						className={styles[formData.lastName.className]}
						placeholder="Last Name"
						id="lastName"
						value={formData.lastName.value}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="mobileNumber">
						Mobile Number*
					</label>
					<input
						type="text"
						className={styles[formData.mobileNumber.className]}
						placeholder="Mobile Number*"
						id="mobileNumber"
						value={formData.mobileNumber.value}
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
				<Link to="/change-password">
					<div className={styles["change-password"]}>
						Change Password
					</div>
				</Link>
				<div className={styles["save-btn"]} onClick={updateUserProfile}>
					{isLoaded ? "Saving data..." : "Save"}
				</div>
				<div className="error">{validationError}</div>
				<div className="error">{error}</div>
			</form>
		</div>
	);
}
