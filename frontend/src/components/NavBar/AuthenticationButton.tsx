import React from "react";

import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
	const { isAuthenticated } = useAuth0();

	return isAuthenticated ? <LogoutButton /> : <></>;
};

export default AuthenticationButton;
