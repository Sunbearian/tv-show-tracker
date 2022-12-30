import AuthNav from "./AuthNav";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
	return (
		<nav className="NavBar">
			<div className="NavBarItem">
				<p className="title">TV Show Tracker</p>
				<NavLink to="/profile">Profile </NavLink>
				<NavLink to="/">TV Shows</NavLink>
			</div>
			<AuthNav></AuthNav>
		</nav>
	);
}
