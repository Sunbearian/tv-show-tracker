import express from "express";
import logger from "morgan";
import cors from "cors";

const PORT = process.env.PORT ?? 3500;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
