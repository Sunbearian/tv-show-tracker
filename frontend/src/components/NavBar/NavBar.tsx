import AuthNav from "./AuthNav";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./NavBar.css";

export default function NavBar() {
	const { isAuthenticated } = useAuth0();
	return (
		<nav className="NavBar">
			<div className="NavBarItem">
				<p className="title">TV Show Tracker</p>
				{isAuthenticated ? (
					<div className="links">
						<NavLink to="/profile">
							<button>Profile</button>
						</NavLink>
						<NavLink to="/">
							<button>TV Shows</button>
						</NavLink>
					</div>
				) : (
					<></>
				)}
			</div>
			<AuthNav></AuthNav>
		</nav>
	);
}
