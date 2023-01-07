import express from "express";
import logger from "morgan";
import cors from "cors";
import usersRouter from "./routes/users.js";
import tvShowsRouter from "./routes/tvshows.js";

const PORT = process.env.PORT ?? 3500;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/tvshows", tvShowsRouter);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
