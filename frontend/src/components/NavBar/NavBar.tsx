import AuthNav from "./AuthNav";

export default function NavBar() {
	return (
		<nav className="bg-green-900 w-full flex justify-between items-center px-4 h-12">
			<div className="NavBarItem">
				<p className="text-white font-bold">TV Show Tracker</p>
			</div>
			<AuthNav></AuthNav>
		</nav>
	);
}
