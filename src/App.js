import "./styles.css";
// import Homepage from "./pages/Homepage";
import { Header, SortAndFilter } from "./components";
export default function App() {
  return (
    <div className="App">
      {/* <h1>Kharidari</h1> */}
      {/* <Homepage /> */}
      <Header />
      <SortAndFilter />
    </div>
  );
}
