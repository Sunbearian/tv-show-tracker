import express, { Router } from "express";
const tvShowsRouter = express.Router();

import { getUserTVShows, addTVShow, deleteShow } from "../models/tvshows.js";

tvShowsRouter.get("/:id", async (req, res) => {
	const id = req.params.id;
	const userTVShows = await getUserTVShows(id);

	res.status(200).json({ success: true, payload: userTVShows });
});

tvShowsRouter.post("/", async (req, res) => {
	const tvShow = req.body;
	const newTVShow = await addTVShow(tvShow);

	res.status(201).json({ success: true, payload: newTVShow });
});

tvShowsRouter.delete("/:id", async (req, res) => {
	const showId = req.params.id;
	const newTVShow = await deleteShow(showId);

	res.status(201).json({ success: true, payload: newTVShow });
});

export default tvShowsRouter;
