import { useEffect, useState } from "react";
import { Header } from "../../components/";
import styles from "./address.module.css";
import { useData } from "../../dataProvider/DataProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function AddNewAddress() {
	const [formData, setFormData] = useState({
		name: "",
		mobileNumber: "",
		pincode: "",
		state: "",
		city: "",
		house: "",
		areaAndRoad: ""
	});

	const {
		state: { userId, addresses },
		dispatch, apiURL
	} = useData();
	const navigate = useNavigate();
	const { state: routerState } = useLocation();
	const { addressId } = useParams();

	useEffect(() => {
		if (addressId) {
			const address = addresses.find(({ _id }) => _id === addressId);
			setFormData(address);
		}
	}, [addressId, addresses]);

	function updateFormData(event) {
		const { id, value } = event.target;
		setFormData({ ...formData, [id]: value });
	}

	async function addOrUpdateAddress() {
		if (addressId) {
			try {
				const { data } = await axios.put(
					`${apiURL}/addresses/${userId}/${addressId}`,
					formData
				);
				if (data.success) {
					await dispatch({
						type: "UPDATE_ADDRESS",
						payload: data.address
					});
				}
			} catch (error) {
				const {
					response: { data }
				} = error;
				console.log(data.messsage, data.error);
			}
		} else {
			try {
				const { data } = await axios.post(
					`${apiURL}/addresses/${userId}`,
					formData
				);
				if (data.success) {
					await dispatch({
						type: "ADD_ADDRESS",
						payload: data.address
					});
				}
			} catch (error) {
				const {
					response: { data }
				} = error;
				console.log(data.messsage, data.error);
			}
		}

		if (routerState?.fromCheckout) {
			navigate("/address", {
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
						className={styles["text-input"]}
						placeholder="Full Name*"
						id="name"
						value={formData.name}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="mobileNumber">
						Mobile Number*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="Mobile Number*"
						id="mobileNumber"
						value={formData.mobileNumber}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="pincode">
						Pincode*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="Pincode*"
						id="pincode"
						value={formData.pincode}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="state">
						State*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="State*"
						id="state"
						value={formData.state}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="city">
						City*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="City*"
						id="city"
						value={formData.city}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="house">
						House No.,Building Name*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="House No.,Building Name*"
						id="house"
						value={formData.house}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="roadOrArea">
						Road Name, Area, Colony*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="Road Name, Area, Colony*"
						id="areaAndRoad"
						value={formData.areaAndRoad}
						onChange={updateFormData}
					/>
				</div>
				<div
					className={styles["save-address-btn"]}
					onClick={addOrUpdateAddress}
				>
					Save Address
				</div>
			</div>
		</div>
	);
}
