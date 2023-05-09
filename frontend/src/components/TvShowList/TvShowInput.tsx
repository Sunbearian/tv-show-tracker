import React, { useState } from "react";
// import "./TvShowInput.css";

type TvShowInputType = {
	id_user_show: number;
	show_name: string;
	series_watched: string;
	total_series: string;
	last_watched: string;
	rating: string;
};

type props = {
	addTvShow: (input: TvShowInputType) => void;
};

const initialInput: TvShowInputType = {
	id_user_show: 0,
	show_name: "",
	series_watched: "",
	total_series: "",
	last_watched: "",
	rating: "",
};

export default function TvShowInput({ addTvShow }: props) {
	const [input, setInput] = useState<TvShowInputType>(initialInput);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setInput({
			...input,
			[event.target.name]: event.currentTarget.value,
		} as Pick<TvShowInputType, keyof TvShowInputType>);
	};

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (input !== undefined) {
			if (input.rating === "") {
				input.rating = "1";
			}
			addTvShow(input);
			console.log(input);
			setInput(initialInput);
		}
	}
	// function handleChangeDate(event: React.ChangeEvent<HTMLInputElement>) {
	// 	const convertedDate = new Date(event.target.value);

	// 	setInput({ ...input, last_watched: convertedDate } as Pick<
	// 		TvShowInputType,
	// 		keyof TvShowInputType
	// 	>);
	// }

	return (
		<form
			id="form"
			onSubmit={onSubmit}
			className="rounded border border-solid border-white flex flex-col space-y-1 px-10 py-10 items-center max-w-xl m-4"
		>
			<input
				className="w-full"
				value={input?.show_name}
				type="text"
				placeholder="TV Show"
				name="show_name"
				onChange={handleChange}
				required
			></input>
			<input
				className="w-full"
				value={input?.series_watched}
				type="number"
				placeholder="Series Watched"
				name="series_watched"
				onChange={handleChange}
				required
			></input>
			<input
				className="w-full"
				value={input?.total_series}
				onChange={handleChange}
				type="number"
				placeholder="Total Series"
				name="total_series"
				required
			></input>
			<input
				className="w-full"
				value={input?.last_watched}
				onChange={handleChange}
				type="date"
				placeholder="Last watched"
				name="last_watched"
				required
			></input>
			<label htmlFor="rating">Rating?</label>
			<select
				className="w-full"
				onChange={handleChange}
				id="rating"
				name="rating"
				required
				value={input?.rating}
			>
				<option value="1" placeholder="Rating">
					1
				</option>
				<option value="2" placeholder="Rating">
					2
				</option>
				<option value="3" placeholder="Rating">
					3
				</option>
				<option value="4" placeholder="Rating">
					4
				</option>
				<option value="5" placeholder="Rating">
					5
				</option>
			</select>

			<input type="submit"></input>
		</form>
	);
}
