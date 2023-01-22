import { expressjwt } from "express-jwt";
import jwks from "jwks-rsa";

const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

const jwtCheck = expressjwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${domain}/.well-known/jwks.json`,
	}),
	audience: audience,
	issuer: `https://${domain}/`,
	algorithms: ["RS256"],
});

export default jwtCheck;
