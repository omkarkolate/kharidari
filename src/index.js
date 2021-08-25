import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./DataContext";
import { AuthProvider } from "./AuthContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<StrictMode>
		<AuthProvider>
			<DataProvider>
				<Router>
					<App />
				</Router>
			</DataProvider>
		</AuthProvider>
	</StrictMode>,
	rootElement
);
