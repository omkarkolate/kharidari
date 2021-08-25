import { useState } from "react";
import { Header } from "../../components/";
import styles from "./profile.module.css";

export function Profile() {
	const [formData, setFormData] = useState({
		firstName: "Omkar",
		lastName: "Kolate",
		mobile: "8899458522",
		emailId: "myemailid@gmail.com",
		password: "password"
	});

	function updateFormData(event) {
		const { id, value } = event.target;
		setFormData({ ...formData, [id]: value });
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
						className={styles["text-input"]}
						placeholder="First Name*"
						id="firstName"
						value={formData.firstName}
						onChange={updateFormData}
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["label"]} htmlFor="lastName">
						Last Name
					</label>
					<input
						type="text"
						className={styles["text-input"]}
						placeholder="Last Name"
						id="lastName"
						value={formData.lastName}
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
				<div className={styles["save-btn"]}>Save</div>
			</form>
		</div>
	);
}
