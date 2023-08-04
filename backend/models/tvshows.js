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

export async function editTVShow(showId, newTVShow) {
	const request = await pool.query(
		"UPDATE tvshows SET show_name = $1, series_watched = $2, total_series = $3, rating = $4, last_watched = $5 WHERE id_user_show = $6 RETURNING *",
		[
			newTVShow.showName,
			newTVShow.seriesWatched,
			newTVShow.totalSeries,
			newTVShow.rating,
			newTVShow.lastWatched,
			showId,
		]
	);
	return request.rows[0];
}
