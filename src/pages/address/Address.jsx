import { Header, AddressCard } from "../../components/";
import styles from "./address.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../dataProvider/DataProvider";

export function Address() {
	const {
		state: { addresses }
	} = useData();

	const navigate = useNavigate();

	function gotoAddNewAddress() {
		navigate("/address/add-new-address");
	}

	const addressList = addresses.map((address) => (
		<AddressCard key={address._id} address={address} showOptions />
	));
	return (
		<div>
			<Header title="My Addresses" />
			<div className={styles["address-page"]}>
				<div className={styles["add-new"]} onClick={gotoAddNewAddress}>
					+ Add a new address
				</div>
				<div className={styles["address-page-message"]}>
					{addresses.length > 0
						? "Select delivery address"
						: "No saved address"}
				</div>
				<div className={styles["address-list"]}>{addressList}</div>
			</div>
		</div>
	);
}
