import LoginButton from "../components/NavBar/LoginButton";
import SignupButton from "../components/NavBar/SignupButton";
import "./LandingPage.css";

export default function Main() {
	return (
		<header className="App-header">
			<h1 className='text-4xl font-bold'>TV Show Tracker</h1>
			<p>Can't remember what series you last watched of your favourite show?</p>
			<p>Want to track the series you're watching?</p>
			<p>
				TV Show Tracker is a simple app to help you log what you've watched and
				keep track of where you are
			</p>
			<div className="landing-page-button">
				<LoginButton />
				<SignupButton />
			</div>
		</header>
	);
}
