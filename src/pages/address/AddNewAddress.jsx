import { Header } from "../../components/";
import styles from "./address.module.css";

export function AddNewAddress() {
  return (
    <div>
      <Header title="Add New Address" />
      <div className={styles["address-form"]}>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Name*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="Full Name*"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Mobile Number*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="Mobile Number*"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Pincode*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="Pincode*"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>State*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="State*"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>City*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="City*"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>House No.,Building Name*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="House No.,Building Name*"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Road Name, Area, Colony*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="Road Name, Area, Colony*"
          />
        </div>
        <div className={styles["save-address-btn"]}>Save Address</div>
      </div>
    </div>
  );
}
