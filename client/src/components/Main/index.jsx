import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>DataPlus Solutions</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				<Link to="/createInvoice">
					<button type='button' className={styles.white_btn}>
						Create Invoice

					</button>
				</Link>
				<Link to="/allInvoices">
					<button type='button' className={styles.white_btn}>
						Invoices

					</button>
				</Link>
			</nav>
		</div>
	);
};

export default Main;