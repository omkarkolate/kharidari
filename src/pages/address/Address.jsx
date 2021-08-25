import { Header, AddressCard } from "../../components/";
import styles from "./address.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";

export function Address() {
	const {
		state: { addresses, selectedAddress }
	} = useData();

	const { state: routerState } = useLocation();
	const navigate = useNavigate();

	function gotoAddNewAddress() {
		if (routerState?.fromCheckout) {
			navigate("/address/add-new-address", {
				state: { fromCheckout: routerState.fromCheckout }
			});
		} else {
			navigate("/address/add-new-address");
		}
	}

	const addressList = addresses.map((address) => (
		<AddressCard
			key={address.id}
			address={address}
			selected={address.id === selectedAddress}
			showOptions
		/>
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
				<div className={styles["address-list"]}>
					{addressList}
					{routerState?.fromCheckout && addresses.length > 0 && (
						<Link to={routerState.fromCheckout}>
							<div className={styles["deliver-here"]}>
								DELIVER HERE
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
