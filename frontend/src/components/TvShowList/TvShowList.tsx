import { useEffect, useState } from "react";
import TvShowItem from "./TvShowItem";
import TvShowInput from "./TvShowInput";
import { useAuth0 } from "@auth0/auth0-react";
// import "./TvShowList.css";

type TvShowInputType = {
	id_user_show: number;
	show_name: string;
	series_watched: string;
	total_series: string;
	last_watched: string;
	rating: string;
};

export default function TvShowList() {
	const url = process.env.REACT_APP_SERVER_URL;
	const { user, getAccessTokenSilently }: any = useAuth0();
	const { sub, email } = user;
	const [tvShowData, setTvShowData] = useState<TvShowInputType[]>([]);

	const id = sub;

	async function getTVShows() {
		const token = await getAccessTokenSilently();
		const request = await fetch(`${url}/api/tvshows/${id}`, {
			headers: { authorization: `Bearer ${token}` },
		});
		const response = await request.json();

		const userTVShowList = response.payload;

		setTvShowData(userTVShowList);
	}

	async function checkUser() {
		const token = await getAccessTokenSilently();
		const request = await fetch(`${url}/api/users/${id}`, {
			headers: { authorization: `Bearer ${token}` },
		});
		const response = await request.json();

		if (response.success === false) {
			const request = await fetch(`${url}/api/users/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
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

	async function deleteShow(showID: number, index: number) {
		const token = await getAccessTokenSilently();
		const request = await fetch(`${url}/api/tvshows/${showID}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		const response = await request.json();
		if (response.success === true) {
			let newTVShowData = [
				...tvShowData.slice(0, index),
				...tvShowData.slice(index + 1),
			];
			setTvShowData(newTVShowData);
		}
	}

	useEffect(() => {
		checkUser();
		// eslint-disable-next-line
	}, []);

	async function addTvShow(showInput: TvShowInputType) {
		const token = await getAccessTokenSilently();
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
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(newTVShow),
		});

		const response = await request.json();

		if (response.success === true) {
			setTvShowData([...tvShowData, response.payload]);
		}
	}

	return (
		<div className="w-full max-w-lg">
			<TvShowInput addTvShow={addTvShow}></TvShowInput>
			{tvShowData.map((tvShow: TvShowInputType, index) => {
				return (
					<TvShowItem
						key={index}
						tvShow={tvShow}
						deleteShow={() => {
							deleteShow(tvShow.id_user_show, index);
						}}
					></TvShowItem>
				);
			})}
		</div>
	);
}
