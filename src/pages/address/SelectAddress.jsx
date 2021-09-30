import { Header, AddressCard } from "../../components/";
import styles from "./address.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../dataProvider/DataProvider";
import { useState } from "react";
import axios from "axios";
import { useLoader } from "../../customHooks/useLoader";

export function SelectAddress() {
	const {
		state: { userId, addresses, selectedAddress },
		dispatch,
		apiURL
	} = useData();
	const [currentSelectedAddress, setCurrentSelectedAddress] = useState(
		addresses.find((address) => address._id === selectedAddress)
	);
	const { isLoaded, setIsLoaded, error, setError } = useLoader();

	const { state: routerState } = useLocation();
	const navigate = useNavigate();

	function gotoAddNewAddress() {
		navigate("/address/add-new-address", {
			state: { fromCheckout: routerState.fromCheckout }
		});
	}

	async function saveSelectAddress() {
		try {
			setIsLoaded(true);
			const { data } = await axios.post(
				`${apiURL}/addresses/selectAddress/${userId}/${currentSelectedAddress._id}`
			);
			if (data.success) {
				await dispatch({
					type: "SELECT_ADDRESS",
					payload: data.selectedAddress
				});
				setIsLoaded(false);
				navigate(routerState.fromCheckout);
			}
		} catch (error) {
			const {
				response: { data }
			} = error;
			setError(`${data.messsage}. ${data.error}`);
		}
	}

	const addressList = addresses.map((address) => (
		<AddressCard
			key={address._id}
			address={address}
			selected={address._id === currentSelectedAddress?._id}
			setCurrentSelectedAddress={setCurrentSelectedAddress}
			showOptions
			canSelect
		/>
	));
	return (
		<div>
			<Header title="Select Address" />
			<div className={styles["address-page"]}>
				<div className={styles["add-new"]} onClick={gotoAddNewAddress}>
					+ Add a new address
				</div>
				<div className={styles["address-page-message"]}>
					{addresses.length > 0
						? "Select delivery address"
						: "No saved address"}
				</div>
				<div className={styles["address-list"]}>
					{addressList}
					<div className="error">{error}</div>
					<div
						className={styles["deliver-here"]}
						onClick={saveSelectAddress}
					>
						{isLoaded ? "Selecting Address..." : "DELIVER HERE"}
					</div>
				</div>
			</div>
		</div>
	);
}
