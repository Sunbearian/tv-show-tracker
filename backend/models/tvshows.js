//SELECT * FROM tvshows  INNER JOIN users ON  tvshows.user_id = users.user_id WHERE tvshows.user_id = 'auth0|63af2171dd84a45a70f92f9f'
import { pool } from "../db/index.js";

export async function getUserTVShows(id) {
	console.log(id, "this is the id");
	const data = await pool.query("SELECT * FROM tvshows WHERE user_id = $1", [
		id,
	]);

	return data.rows;
}
