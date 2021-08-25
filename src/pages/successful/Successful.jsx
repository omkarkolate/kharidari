import { Header, ShopNow } from "../../components/";
import styles from "./successful.module.css";

export function Successful() {
	return (
		<div>
			<Header />
			<div className={styles["succesful-page"]}>
				<ShopNow message={"Order Placed Succesfully"} />
			</div>
		</div>
	);
}
