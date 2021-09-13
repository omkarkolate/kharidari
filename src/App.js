import "./styles.css";
import {
	Home,
	Category,
	ProductDetails,
	Cart,
	Wishlist,
	Address,
	AddNewAddress,
	Checkout,
	Payment,
	Successful,
	Orders,
	OrderDetails,
	Profile,
	Login,
	NoMatch,
	SignUp
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:category" element={<Category />} />
				<Route
					path="/product-details/:productId"
					element={<ProductDetails />}
				/>
				<Route path="/cart" element={<Cart />} />
				<PrivateRoute path="/wishlist" element={<Wishlist />} />
				<PrivateRoute path="/address" element={<Address />} />
				<PrivateRoute
					path="/address/add-new-address"
					element={<AddNewAddress />}
				/>
				<PrivateRoute
					path="/address/edit-address/:addressId"
					element={<AddNewAddress />}
				/>
				<PrivateRoute path="/checkout" element={<Checkout />} />
				<PrivateRoute
					path="/checkout/:productId"
					element={<Checkout />}
				/>
				<PrivateRoute path="/payment" element={<Payment />} />
				<PrivateRoute path="/orders" element={<Orders />} />
				<PrivateRoute
					path="/order-details/:orderId"
					element={<OrderDetails />}
				/>
				<PrivateRoute path="/profile" element={<Profile />} />
				<PrivateRoute path="/successful" element={<Successful />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</div>
	);
}
