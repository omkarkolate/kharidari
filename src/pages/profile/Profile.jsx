import { Header } from "../../components/";
import styles from "./profile.module.css";

export function Profile() {
  return (
    <div>
      <Header title="My Profile" />
      <div className={styles["profile-form"]}>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>First Name*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="First Name*"
            value="Omkar"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Last Name</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="Last Name"
            value="Kolate"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Mobile Number*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="Mobile Number*"
            value="1234567895"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Email id*</label>
          <input
            type="text"
            className={styles["text-input"]}
            placeholder="Email id*"
            value="myemailid@gmail.com"
          />
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["label"]}>Password*</label>
          <input
            type="password"
            className={styles["text-input"]}
            placeholder="Password*"
            value="mypassword"
          />
        </div>
        <div className={styles["save-btn"]}>Save</div>
      </div>
    </div>
  );
}
