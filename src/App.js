import "./styles.css";
import {
	Home,
	Category,
	ProductDetail,
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
	Login
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:category" element={<Category />} />
				<Route path="/product-detail/:id" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
				<PrivateRoute path="/wishlist" element={<Wishlist />} />
				<PrivateRoute path="/address" element={<Address />} />
				<PrivateRoute
					path="/address/add-new-address"
					element={<AddNewAddress />}
				/>
				<PrivateRoute
					path="/address/edit-address/:id"
					element={<AddNewAddress />}
				/>
				<PrivateRoute path="/checkout" element={<Checkout />} />
				<PrivateRoute path="/checkout/:id" element={<Checkout />} />
				<PrivateRoute path="/payment" element={<Payment />} />
				<PrivateRoute path="/orders" element={<Orders />} />
				<PrivateRoute
					path="/order-details/:id"
					element={<OrderDetails />}
				/>
				<PrivateRoute path="/profile" element={<Profile />} />
				<PrivateRoute path="/successful" element={<Successful />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}
