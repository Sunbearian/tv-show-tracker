import { pool } from "../db/index.js";

export async function getUserTVShows(id) {
	const request = await pool.query("SELECT * FROM tvshows WHERE user_id = $1", [
		id,
	]);

	return request.rows;
}

export async function addTVShow(tvShow) {
	const request = await pool.query(
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
	return request.rows[0];
}

export async function deleteShow(showId) {
	const request = await pool.query(
		"DELETE FROM tvshows WHERE id_user_show = $1 RETURNING *",
		[showId]
	);
	return request.rows[0];
}
