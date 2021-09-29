import { useEffect, useState } from "react";
import { Header } from "../../components/";
import styles from "./address.module.css";
import { useData } from "../../dataProvider/DataProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { validate, isAllInputsValid } from "../utils";
import { useLoader } from "../../customHooks/useLoader";

export function AddNewAddress() {
	const [formData, setFormData] = useState({
		name: { value: "", isValid: null, className: "text-input" },
		mobileNumber: { value: "", isValid: null, className: "text-input" },
		pincode: { value: "", isValid: null, className: "text-input" },
		state: { value: "", isValid: null, className: "text-input" },
		city: { value: "", isValid: null, className: "text-input" },
		house: { value: "", isValid: null, className: "text-input" },
		areaAndRoad: { value: "", isValid: null, className: "text-input" }
	});

	const {
		state: { userId, addresses },
		dispatch,
		apiURL
	} = useData();
	const navigate = useNavigate();
	const { state: routerState } = useLocation();
	const { addressId } = useParams();
	const { isLoaded, setIsLoaded, error, setError } = useLoader();
	const [validationError, setValidationError] = useState(null);

	useEffect(() => {
		if (addressId) {
			const address = addresses.find(({ _id }) => _id === addressId);
			setFormData((prevFormData) => ({
				name: {
					...prevFormData.name,
					value: address.name,
					isValid: true
				},
				mobileNumber: {
					...prevFormData.mobileNumber,
					value: address.mobileNumber,
					isValid: true
				},
				pincode: {
					...prevFormData.pincode,
					value: address.pincode,
					isValid: true
				},
				state: {
					...prevFormData.state,
					value: address.state,
					isValid: true
				},
				city: {
					...prevFormData.city,
					value: address.city,
					isValid: true
				},
				house: {
					...prevFormData.house,
					value: address.house,
					isValid: true
				},
				areaAndRoad: {
					...prevFormData.areaAndRoad,
					value: address.areaAndRoad,
					isValid: true
				}
			}));
		}
	}, [addressId, addresses]);

	function updateFormData(event) {
		if (validationError) setValidationError(null);
		if (error) setError(null);

		const { id, value } = event.target;
		const isValid = validate(id, value, formData);
		const className = isValid ? "text-input-valid" : "text-input-invalid";
		setFormData({ ...formData, [id]: { value, isValid, className } });
	}

	async function addOrUpdateAddress() {
		if (!isAllInputsValid(formData)) {
			setValidationError("Please fill the required information");
			return;
		}
		if (addressId) {
			try {
				setIsLoaded(true);
				const { data } = await axios.put(
					`${apiURL}/addresses/${userId}/${addressId}`,
					{
						name: formData.name.value,
						mobileNumber: formData.mobileNumber.value,
						pincode: formData.pincode.value,
						state: formData.state.value,
						city: formData.city.value,
						house: formData.house.value,
						areaAndRoad: formData.areaAndRoad.value
					}
				);
				if (data.success) {
					await dispatch({
						type: "UPDATE_ADDRESS",
						payload: data.address
					});
				}
				setIsLoaded(false);
			} catch (error) {
				const {
					response: { data }
				} = error;
				setError(`${data.messsage}. ${data.error}`);
				return;
			}
		} else {
			try {
				setIsLoaded(true);
				const { data } = await axios.post(
					`${apiURL}/addresses/${userId}`,
					{
						name: formData.name.value,
						mobileNumber: formData.mobileNumber.value,
						pincode: formData.pincode.value,
						state: formData.state.value,
						city: formData.city.value,
						house: formData.house.value,
						areaAndRoad: formData.areaAndRoad.value
					}
				);
				if (data.success) {
					await dispatch({
						type: "ADD_ADDRESS",
						payload: data.address
					});
				}
				setIsLoaded(false);
			} catch (error) {
				const {
					response: { data }
				} = error;
				setError(`${data.messsage}. ${data.error}`);
				return;
			}
		}

		if (routerState?.fromCheckout) {
			navigate("/select-address", {
				state: { fromCheckout: routerState.fromCheckout }
			});
		} else {
			navigate("/address");
		}
	}

	return (
		<div>
			<Header title="Add New Address" />
			<div className={styles["address-form"]}>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="name">
						Name*
					</label>
					<input
						type="text"
						className={styles[formData.name.className]}
						placeholder="Full Name*"
						id="name"
						value={formData.name.value}
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
					<label className={styles["label"]} htmlFor="pincode">
						Pincode*
					</label>
					<input
						type="text"
						className={styles[formData.pincode.className]}
						placeholder="Pincode*"
						id="pincode"
						value={formData.pincode.value}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="state">
						State*
					</label>
					<input
						type="text"
						className={styles[formData.state.className]}
						placeholder="State*"
						id="state"
						value={formData.state.value}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="city">
						City*
					</label>
					<input
						type="text"
						className={styles[formData.city.className]}
						placeholder="City*"
						id="city"
						value={formData.city.value}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="house">
						House No.,Building Name*
					</label>
					<input
						type="text"
						className={styles[formData.house.className]}
						placeholder="House No.,Building Name*"
						id="house"
						value={formData.house.value}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="roadOrArea">
						Road Name, Area, Colony*
					</label>
					<input
						type="text"
						className={styles[formData.areaAndRoad.className]}
						placeholder="Road Name, Area, Colony*"
						id="areaAndRoad"
						value={formData.areaAndRoad.value}
						onChange={updateFormData}
					/>
				</div>
				<div
					className={styles["save-address-btn"]}
					onClick={addOrUpdateAddress}
				>
					{isLoaded ? "Saving Address..." : "Save Address"}
				</div>
				<div className="error">{validationError}</div>
				<div className="error">{error}</div>
			</div>
		</div>
	);
}
