import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	const { logout } = useAuth0();
	return (
		<button
			className="button m-0 text-xs"
			onClick={() =>
				logout({
					returnTo: window.location.origin,
				})
			}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
