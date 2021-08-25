import { useData } from "../../DataContext";
import styles from "./addressCard.module.css";
import { useNavigate } from "react-router-dom";

export function AddressCard({ address, selected, showOptions }) {
	const { dispatch } = useData();
	const navigate = useNavigate();

	const addressDetails = `${address.house}, ${address.roadAndArea}, ${address.city}, ${address.state} - ${address.pincode}`;

	function selectAddress(id) {
		dispatch({
			type: "SELECT_ADDRESS",
			payload: id
		});
	}

	function removeAddress(id) {
		dispatch({
			type: "REMOVE_ADDRESS",
			payload: id
		});
	}

	function editAddress(id) {
		navigate(`/address/edit-address/${address.id}`);
	}

	return (
		<div className={styles["address-card"]}>
			{showOptions && (
				<div>
					<input
						type="radio"
						name="SELECTED_ADDRESS"
						id={address.id}
						checked={selected}
						onChange={() => selectAddress(address.id)}
					/>
				</div>
			)}
			<label htmlFor={address.id}>
				<div className={styles["address-name"]}>{address.fullName}</div>
				<div className={styles["address-details"]}>
					{addressDetails}
				</div>
				<div className={styles["address-mobileno"]}>
					{address.mobile}
				</div>
			</label>
			{showOptions && (
				<div className={styles["address-card-options"]}>
					<div
						className={styles["edit-option"]}
						onClick={() => editAddress(address.id)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-edit"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#000000"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
							<path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
							<line x1="16" y1="5" x2="19" y2="8" />
						</svg>
					</div>
					<div
						className={styles["remove-option"]}
						onClick={() => removeAddress(address.id)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-trash"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#ff2825"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="4" y1="7" x2="20" y2="7" />
							<line x1="10" y1="11" x2="10" y2="17" />
							<line x1="14" y1="11" x2="14" y2="17" />
							<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
							<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
						</svg>
					</div>
				</div>
			)}
		</div>
	);
}
