import { useState } from "react";
import TvShowItem from "./TvShowItem";
import TvShowInput from "./TvShowInput";

type TvShowInputType = {
	show_name: string;
	series_watched: string;
	total_series: string;
	last_watched: string;
	rating: string;
};

const initialTestData: TvShowInputType[] = [
	{
		show_name: "Scrubs",
		series_watched: "11",
		total_series: "12",
		last_watched: "2019-01-16",
		rating: "5",
	},
	{
		show_name: "How I Met Your Mother",
		series_watched: "7",
		total_series: "7",
		last_watched: "2022-12-21",
		rating: "5",
	},
];

export default function TvShowList() {
	const [tvShowData, setTvShowData] =
		useState<TvShowInputType[]>(initialTestData);

	function addTvShow(showInput: TvShowInputType) {
		setTvShowData([...tvShowData, showInput]);
	}
	console.log(tvShowData);

	return (
		<div>
			<TvShowInput addTvShow={addTvShow}></TvShowInput>
			{tvShowData.map((tvShow: TvShowInputType, index) => {
				return <TvShowItem key={index} tvShow={tvShow}></TvShowItem>;
			})}
		</div>
	);
}
