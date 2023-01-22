import express, { Router } from "express";
const usersRouter = express.Router();
import jwtCheck from "../auth/check-jwt.js";

import { checkUserID, createUser } from "../models/users.js";

usersRouter.get("/:id", jwtCheck, async (req, res) => {
	const id = req.params.id;
	const userID = await checkUserID(id);

	if (userID === undefined) {
		res.status(200).json({ success: false });
	} else {
		res.status(200).json({ success: true, payload: userID });
	}
});

usersRouter.post("/", jwtCheck, async (req, res) => {
	const user = req.body;
	const createdUser = await createUser(user);
	res.status(201).json({ success: true, payload: user });
});

export default usersRouter;
