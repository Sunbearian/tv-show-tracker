import { useState } from "react";
import { EditButton } from "./EditButton";

type TvShowInputType = {
	id_user_show?: number;
	show_name: string;
	series_watched: string;
	total_series: string;
	last_watched: string;
	rating: string;
};

type props = {
	tvShow: TvShowInputType;
	deleteShow: Function;
};

export default function TvShowItem({ tvShow, deleteShow }: props) {
	const { show_name, series_watched, total_series, last_watched, rating } =
		tvShow;

	const [isEditing, setIsEditing] = useState(false);

	const convertedDate = last_watched.slice(0, 10);

	async function onClick() {
		deleteShow();
	}

	function toggleEdit() {
		setIsEditing(!isEditing);
	}

	return (
		<div className="rounded-xl border border-solid border-white flex flex-col space-y-1 px-10 py-6 items-start max-w-xl m-4 text-white">
			<h3 className="text-2xl font-bold ">{show_name}</h3>
			<p>
				Series: {series_watched} / {total_series}
			</p>
			<p>Last Watched: {convertedDate}</p>
			<p>{rating} / 5</p>
			<div className="self-end">
				<EditButton
					isEditing={isEditing}
					toggleEdit={toggleEdit}
					className={"bg-white p-2 rounded-full hover:bg-red-700"}
				></EditButton>

				<button
					onClick={onClick}
					className="bg-white p-2 rounded-full hover:bg-red-700"
				>
					🗑️
				</button>
			</div>
		</div>
	);
}
