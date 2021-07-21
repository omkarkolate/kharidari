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
  General,
  Orders,
  OrderDetails,
  Profile
} from "./pages/index";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/address" element={<Address />} />
        <Route path="/address/add-new-address" element={<AddNewAddress />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orderDetails/:orderId" element={<OrderDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/successful"
          element={<General message="Order Placed Succesfully" />}
        />
      </Routes>
    </div>
  );
}
