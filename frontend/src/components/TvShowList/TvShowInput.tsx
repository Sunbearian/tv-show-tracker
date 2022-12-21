import React, { useState } from "react";

type TvShowInputType = {
	show_name: string;
	series_watched: number;
	total_Series: number;
	last_watched: Date;
	rating: number;
};

type props = {
	addTvShow: (input: TvShowInputType) => void;
};

export default function TvShowInput({ addTvShow }: props) {
	const [input, setInput] = useState<TvShowInputType>();

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
			addTvShow(input);
			console.log(input);
		}
	}
	function handleChangeDate(event: React.ChangeEvent<HTMLInputElement>) {
		const convertedDate = new Date(event.target.value);

		setInput({ ...input, last_watched: convertedDate } as Pick<
			TvShowInputType,
			keyof TvShowInputType
		>);
	}

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="TV Show"
				name="show_name"
				onChange={handleChange}
				required
			></input>
			<input
				type="number"
				placeholder="Series Watched"
				name="series_watched"
				onChange={handleChange}
				required
			></input>
			<input
				onChange={handleChange}
				type="number"
				placeholder="Total Series"
				name="total_series"
				required
			></input>
			<input
				onChange={handleChangeDate}
				type="date"
				placeholder="Last watched"
				name="last_watched"
				required
			></input>
			<label htmlFor="rating">Rating?</label>
			<select onChange={handleChange} id="rating" name="rating" required>
				<option placeholder="Rating">1</option>
				<option placeholder="Rating">2</option>
				<option placeholder="Rating">3</option>
				<option placeholder="Rating">4</option>
				<option placeholder="Rating">5</option>
			</select>
			<input type="submit"></input>
		</form>
	);
}
