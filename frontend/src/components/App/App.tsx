import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import TvShowList from "../TvShowList/TvShowList";
import { Profile } from "../../routes";

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<header className="App-header">
				<h1>TV Show Tracker</h1>
			</header>
			<main>
				<Routes>
					<Route path="/profile" element={<Profile />} />
				</Routes>
				<TvShowList></TvShowList>
			</main>
		</div>
	);
}

export default App;
