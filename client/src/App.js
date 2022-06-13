import { Navigate, Route, Routes } from "react-router-dom";
import Invoice from "./components/Invoice";
import Invoicelist from "./components/Invoicelist";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/SignUp";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/allInvoices" exact element={<Invoicelist />} />
			<Route path="/createInvoice" exact element={<Invoice />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			
		</Routes>
	);
}

export default App;