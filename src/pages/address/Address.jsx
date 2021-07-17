import { Header } from "../../components/";
import styles from "./address.module.css";
import { Link } from "react-router-dom";

export function Address() {
  return (
    <div>
      <Header title="My Addresses" />
      <div className={styles["address-page"]}>
        <Link to="/address/add-new-address">
          <div className={styles["add-new"]}>+ Add a new address</div>
        </Link>
        <div className={styles["address-list"]}>
          <div className={styles["address-card"]}>
            <div className={styles["address-select-btn"]}>
              <input type="radio" name="SELECTED-ADDRESS" />
            </div>
            <div>
              <div className={styles["address-name"]}>Omkar Kolate</div>
              <div className={styles["address-details"]}>
                Mauli, Vanipeth, A/P Amba, Tal - Shahuwadi, Kolhapur District,
                Maharashtra - 415101
              </div>
              <div className={styles["address-mobileno"]}>8888540008</div>
            </div>
          </div>

          <div className={styles["address-card"]}>
            <div className={styles["address-select-btn"]}>
              <input type="radio" name="SELECTED-ADDRESS" />
            </div>
            <div>
              <div className={styles["address-name"]}>Omkar Kolate</div>
              <div className={styles["address-details"]}>
                Mauli, Vanipeth, A/P Amba, Tal - Shahuwadi, Kolhapur District,
                Maharashtra - 415101
              </div>
              <div className={styles["address-mobileno"]}>8888540008</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
