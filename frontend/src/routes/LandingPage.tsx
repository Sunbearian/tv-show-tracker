import LoginButton from "../components/NavBar/LoginButton";
import SignupButton from "../components/NavBar/SignupButton";

export default function Main() {
	return (
		<header className="App-header text-white flex flex-col items-center text-center">
			<h1 className="text-6xl font-bold m-12">TV Show Tracker</h1>
			<div className="flex flex-col items-center text-lg">
				<p className="m-1">
					Can't remember what series you last watched of your favourite show?
				</p>
				<p className="m-1">Want to track the series you're watching?</p>
				<p className="m-1">
					TV Show Tracker is a simple app to help you log what you've watched
					and keep track of where you are.
				</p>
			</div>
			<div className="space-x-10">
				<LoginButton />
				<SignupButton />
			</div>
		</header>
	);
}
