import styles from "./iconBtns.module.css";
import { useData } from "../../dataProvider/DataProvider";
import { addOrRemoveFromWishlist } from "../utils";

export function HeartIconBtn({ productId }) {
	const {
		state: { wishlist, userId },
		dispatch, apiURL
	} = useData();

	const inWishlist = wishlist.find(({ _id }) => _id === productId);

	return (
		<div
			className={styles["heart-icon-btn"]}
			onClick={() =>
				addOrRemoveFromWishlist(inWishlist, userId, productId, dispatch, apiURL)
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-heart"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke={inWishlist ? "red" : "#9e9e9e"}
				fill={inWishlist ? "red" : "none"}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
			</svg>
		</div>
	);
}
