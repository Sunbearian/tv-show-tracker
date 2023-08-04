import express, { Router } from "express";
import jwtCheck from "../auth/check-jwt.js";
const tvShowsRouter = express.Router();

import {
	getUserTVShows,
	addTVShow,
	deleteShow,
	editTVShow,
} from "../models/tvshows.js";

tvShowsRouter.get("/:id", jwtCheck, async (req, res) => {
	const id = req.params.id;
	const userTVShows = await getUserTVShows(id);

	res.status(200).json({ success: true, payload: userTVShows });
});

tvShowsRouter.post("/", jwtCheck, async (req, res) => {
	const tvShow = req.body;
	const newTVShow = await addTVShow(tvShow);

	res.status(201).json({ success: true, payload: newTVShow });
});

tvShowsRouter.delete("/:id", jwtCheck, async (req, res) => {
	const showId = req.params.id;
	const newTVShow = await deleteShow(showId);

	res.status(201).json({ success: true, payload: newTVShow });
});

tvShowsRouter.put("/:id", async (req, res) => {
	const showId = req.params.id;
	const editedTVShow = req.body;
	const updatedTVShow = await editTVShow(showId, editedTVShow);
	res.status(200).json({ success: true, payload: updatedTVShow });
});

export default tvShowsRouter;
