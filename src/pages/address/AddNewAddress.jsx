import { useEffect, useState } from "react";
import { Header } from "../../components/";
import styles from "./address.module.css";
import uuid from "react-uuid";
import { useData } from "../../dataProvider/DataProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function AddNewAddress() {
	const [formData, setFormData] = useState({
		id: "",
		fullName: "",
		mobile: "",
		pincode: "",
		state: "",
		city: "",
		house: "",
		roadAndArea: ""
	});

	const {
		state: { addresses },
		dispatch
	} = useData();
	const navigate = useNavigate();
	const { state: routerState } = useLocation();
	const addressId = useParams();

	useEffect(() => {
		if (addressId.id) {
			const address = addresses.find(({ id }) => id === addressId.id);
			setFormData(address);
		}
	}, [addressId.id, addresses]);

	function updateFormData(event) {
		const { id, value } = event.target;
		setFormData({ ...formData, [id]: value });
	}

	function addOrUpdateAddress() {
		if (addressId.id) {
			dispatch({
				type: "UPDATE_ADDRESS",
				payload: formData
			});
		} else {
			dispatch({
				type: "ADD_ADDRESS",
				payload: { ...formData, id: uuid() }
			});
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
					<label className={styles["label"]} htmlFor="fullName">
						Name*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="Full Name*"
						id="fullName"
						value={formData.fullName}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="mobile">
						Mobile Number*
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="Mobile Number*"
						id="mobile"
						value={formData.mobile}
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
						id="roadAndArea"
						value={formData.roadAndArea}
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
