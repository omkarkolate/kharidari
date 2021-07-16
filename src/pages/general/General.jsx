import { Header, ShopNow } from "../../components/";
import styles from "./general.module.css";

export function General({ message }) {
  return (
    <div>
      <Header />
      <div className={styles["general-page"]}>
        <ShopNow message={message} />
      </div>
    </div>
  );
}
