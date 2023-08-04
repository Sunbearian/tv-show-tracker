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
	deleteShow: () => void;
	editShow: Function;
	toggleEdit: () => void;
	isEditing: boolean;
};

export default function TvShowItem({
	tvShow,
	deleteShow,
	editShow,
	toggleEdit,
	isEditing,
}: props) {
	const { show_name, series_watched, total_series, last_watched, rating } =
		tvShow;

	const [editedShow, setEditedShow] = useState(tvShow);

	const convertedDate = last_watched.slice(0, 10);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setEditedShow({
			...editedShow,
			[event.target.name]: event.currentTarget.value,
		} as Pick<TvShowInputType, keyof TvShowInputType>);
	};

	async function deleteClick() {
		deleteShow();
	}

	return (
		<div className="rounded-xl border border-solid border-white flex flex-col space-y-1 px-10 py-6 items-start max-w-xl m-4 text-white">
			{isEditing ? (
				<input
					className="bg-slate-800 text-2xl font-bold border rounded"
					value={editedShow.show_name}
					onChange={handleChange}
					name="show_name"
				></input>
			) : (
				<h3 className="text-2xl font-bold ">{show_name}</h3>
			)}
			<p>
				Series: {series_watched} / {total_series}
			</p>
			<p>Last Watched: {convertedDate}</p>
			<p>{rating} / 5</p>
			<div className="self-end">
				<EditButton
					isEditing={isEditing}
					toggleEdit={toggleEdit}
					editShow={() => {
						editShow(editedShow);
					}}
					className={"bg-white p-2 rounded-full hover:bg-red-700"}
				></EditButton>

				<button
					onClick={deleteClick}
					className="bg-white p-2 rounded-full hover:bg-red-700"
				>
					🗑️
				</button>
			</div>
		</div>
	);
}
