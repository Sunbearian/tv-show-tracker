import { pool } from "../db/index.js";

export async function getUserTVShows(id) {
	const data = await pool.query("SELECT * FROM tvshows WHERE user_id = $1", [
		id,
	]);

	return data.rows;
}

export async function addTVShow(tvShow) {
	const data = await pool.query(
		"INSERT INTO tvshows (user_id, show_name, series_watched, total_series, rating, last_watched) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
		[
			tvShow.userID,
			tvShow.showName,
			tvShow.seriesWatched,
			tvShow.totalSeries,
			tvShow.rating,
			tvShow.lastWatched,
		]
	);
	return data.rows[0];
}
