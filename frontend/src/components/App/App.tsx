import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import TvShowList from "../TvShowList/TvShowList";

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<header className="App-header">
				<h1>TV Shower Tracker</h1>
			</header>
			<main>
				<TvShowList></TvShowList>
			</main>
		</div>
	);
}

export default App;
