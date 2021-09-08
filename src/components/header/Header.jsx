import styles from "./header.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useState } from "react";
import { useData } from "../../dataProvider/DataProvider";
import { useAuth } from "../../authProvider/AuthProvider";

export function Header({ homepage, brandName, title, searchIcon }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isUserLogedin, logout } = useAuth();
	const {
		state: { cart }
	} = useData();

	const history = createBrowserHistory();
	const navigate = useNavigate();
	const {pathname} = useLocation();

	function goBack() {
		history.back();
	}

	function logoutHandler() {
		logout();
		navigate("/");
	}

	function handleDropDownMenu() {
		if (!isMenuOpen) {
			setIsMenuOpen(true);
		} else {
			setIsMenuOpen(false);
		}
	}

	const userAndArrowIcon = (
		<div
			className={styles["user-and-arrow-icon"]}
			onClick={handleDropDownMenu}
		>
			<div className={styles["user-icon-and-name"]}>
				<div className={styles["user-icon"]}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-user"
						width="24"
						height="20"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="#ffffff"
						fill="#ffffff"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<circle cx="12" cy="7" r="4" />
						<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
					</svg>
				</div>
				<span className={styles["username"]}>Omkar</span>
			</div>

			{isMenuOpen ? (
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevron-up"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="#ffffff"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<polyline points="6 15 12 9 18 15" />
					</svg>
				</div>
			) : (
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevron-down"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="#ffffff"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
			)}
		</div>
	);

	const dropDownMenu = (
		<div className={styles["drop-down-menu"]}>
			<Link to="/profile">
				<div className={styles["option"]}>Profile</div>
			</Link>
			<Link to="/orders">
				<div className={styles["option"]}>Orders</div>
			</Link>
			<Link to="/wishlist">
				<div className={styles["option"]}>Wishlist</div>
			</Link>
			<Link to="/address">
				<div className={styles["option"]}>Address</div>
			</Link>
			<Link to="/">
				<div className={styles["option"]} onClick={logoutHandler}>
					Logout
				</div>
			</Link>
		</div>
	);

	return (
		<header className={styles["header"]}>
			<div className={styles["header-left"]}>
				{!homepage && (
					<div className={styles["header-back-btn"]} onClick={goBack}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-arrow-left"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="#ffffff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="5" y1="12" x2="19" y2="12" />
							<line x1="5" y1="12" x2="11" y2="18" />
							<line x1="5" y1="12" x2="11" y2="6" />
						</svg>
					</div>
				)}

				<div className={styles["brand-sm"]}>
					<Link to="/">
						{homepage && brandName ? (
							<h2 className={styles["brand-name"]}>Kharidari</h2>
						) : (
							<h2 className={styles["brand-logo"]}>K</h2>
						)}
					</Link>
				</div>

				<div className={styles["brand-md"]}>
					<Link to="/">
						<h2 className={styles["brand-name"]}>Kharidari</h2>
					</Link>
				</div>

				<div className={styles["header-title"]}>{title ?? ""}</div>
				<div className={styles["search-bar-md"]}>
					<input
						type="search"
						placeholder="🔍 Search for Products, Brands and More"
					/>
				</div>
			</div>

			<div className={styles["header-right"]}>
				{searchIcon && (
					<div className={styles["search-icon"]}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-search"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="#ffffff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="10" cy="10" r="7" />
							<line x1="21" y1="21" x2="15" y2="15" />
						</svg>
					</div>
				)}

				<div className={styles["cart-option"]}>
					<Link to="/cart">
						<div className={styles["cart-icon-heading"]}>
							<div className={styles["cart-icon"]}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-shopping-cart"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="#ffffff"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path
										stroke="none"
										d="M0 0h24v24H0z"
										fill="none"
									/>
									<circle cx="6" cy="19" r="2" />
									<circle cx="17" cy="19" r="2" />
									<path d="M17 17h-11v-14h-2" />
									<path d="M6 5l14 1l-1 7h-13" />
								</svg>
								{cart.length > 0 && (
									<div className={styles["badge"]}>
										<div className={styles["badge-count"]}>
											{cart.length}
										</div>
									</div>
								)}
							</div>
							<div className={styles["cart-heading"]}>Cart</div>
						</div>
					</Link>
				</div>
				<div>
					{isUserLogedin ? (
						<div className={styles["user-menu-icon"]}>
							{userAndArrowIcon}
							{isMenuOpen && dropDownMenu}
						</div>
					) : (
						<Link to="/login" state={{from: pathname}}>
							<div className={styles["login"]}>Login</div>
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
