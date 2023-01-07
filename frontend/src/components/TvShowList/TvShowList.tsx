import { useEffect, useState } from "react";
import TvShowItem from "./TvShowItem";
import TvShowInput from "./TvShowInput";
import { useAuth0 } from "@auth0/auth0-react";

type TvShowInputType = {
	show_name: string;
	series_watched: string;
	total_series: string;
	last_watched: string;
	rating: string;
};

export default function TvShowList() {
	const url = process.env.REACT_APP_SERVER_URL;
	const { user }: any = useAuth0();
	const { sub, email } = user;
	const [tvShowData, setTvShowData] = useState<TvShowInputType[]>([]);

	const id = sub;

	async function getTVShows() {
		const request = await fetch(`${url}/api/tvshows/${id}`);
		const response = await request.json();

		const userTVShowList = response.payload;

		setTvShowData(userTVShowList);
	}

	async function checkUser() {
		const request = await fetch(`${url}/api/users/${id}`);
		const response = await request.json();

		if (response.success === false) {
			const request = await fetch(`${url}/api/users/`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id: id, email: email }),
			});
			const response = await request.json();

			if (response.payload.user_id === id) {
				getTVShows();
			}
		} else if (response.success === true) {
			getTVShows();
		}
	}

	useEffect(() => {
		checkUser();
		// eslint-disable-next-line
	}, []);

	async function addTvShow(showInput: TvShowInputType) {
		const newTVShow = {
			userID: sub,
			showName: showInput.show_name,
			seriesWatched: Number(showInput.series_watched),
			totalSeries: Number(showInput.total_series),
			rating: Number(showInput.rating),
			lastWatched: showInput.last_watched,
		};

		const request = await fetch(`${url}/api/tvshows`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newTVShow),
		});

		const response = await request.json();

		if (response.success === true) {
			setTvShowData([...tvShowData, response.payload]);
		}
	}

	return (
		<div>
			<TvShowInput addTvShow={addTvShow}></TvShowInput>
			{tvShowData.map((tvShow: TvShowInputType, index) => {
				return <TvShowItem key={index} tvShow={tvShow}></TvShowItem>;
			})}
		</div>
	);
}
