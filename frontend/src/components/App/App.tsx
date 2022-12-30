import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import { Profile, TVShows, Main } from "../../routes";
import RequireAuth from "../../auth/RequireAuth";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { isAuthenticated } = useAuth0();
	return (
		<div className="App">
			<NavBar></NavBar>

			<Routes>
				<Route path="/" element={isAuthenticated ? <TVShows /> : <Main />} />
				<Route
					path="profile"
					element={
						<RequireAuth redirectTo="/">
							<Profile />
						</RequireAuth>
					}
				/>
				<Route
					path="tvshows"
					element={<RequireAuth redirectTo="/"></RequireAuth>}
				/>
			</Routes>
		</div>
	);
}

export default App;
