import AuthNav from "./AuthNav";

import "./NavBar.css";

export default function NavBar() {
	return (
		<nav className="NavBar">
			<div className="NavBarItem">
				<p className="title">TV Show Tracker</p>
			</div>
			<AuthNav></AuthNav>
		</nav>
	);
}
