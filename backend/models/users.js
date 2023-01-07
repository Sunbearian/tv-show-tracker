import { pool } from "../db/index.js";

//need to POST request to create a new user if they don't exist

//send id and check return, if null then add user to database

export async function checkUserID(id) {
	const data = await pool.query(
		"SELECT user_id FROM users WHERE user_id = $1",
		[id]
	);
	return data.rows[0];
}

export async function createUser(user) {
	const data = await pool.query(
		"INSERT INTO users (user_id, email) VALUES ($1, $2) RETURNING *",
		[user.id, user.email]
	);
	return data.rows[0];
}
