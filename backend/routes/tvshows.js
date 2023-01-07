import express, { Router } from "express";
const tvShowsRouter = express.Router();

import { getUserTVShows } from "../models/tvshows.js";

tvShowsRouter.get("/:id", async (req, res) => {
	const id = req.params.id;
	const userTVShows = await getUserTVShows(id);

	res.status(200).json({ success: true, payload: userTVShows });
});

export default tvShowsRouter;
