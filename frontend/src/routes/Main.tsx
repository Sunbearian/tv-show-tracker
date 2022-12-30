import LoginButton from "../components/NavBar/LoginButton";
import SignupButton from "../components/NavBar/SignupButton";

export default function Main() {
	return (
		<header className="App-header">
			<h1>TV Show Tracker</h1>
			<div>
				<LoginButton />
				<SignupButton />
			</div>
		</header>
	);
}
