import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import TvShowInput from "../TvShowList/TvShowInput";

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<header className="App-header">
				<h1>TV Shower Tracker</h1>
				<TvShowInput></TvShowInput>
			</header>
		</div>
	);
}

export default App;
