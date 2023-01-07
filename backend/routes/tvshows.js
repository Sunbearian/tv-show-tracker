import express, { Router } from "express";
const tvShowsRouter = express.Router();

import { getUserTVShows, addTVShow } from "../models/tvshows.js";

tvShowsRouter.get("/:id", async (req, res) => {
	const id = req.params.id;
	const userTVShows = await getUserTVShows(id);

	res.status(200).json({ success: true, payload: userTVShows });
});

tvShowsRouter.post("/", async (req, res) => {
	const tvShow = req.body;
	console.log(tvShow);
	const newTVShow = await addTVShow(tvShow);

	res.status(201).json({ success: true, payload: newTVShow });
});

export default tvShowsRouter;
