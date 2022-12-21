import { useState } from "react";
import TvShowItem from "./TvShowItem";
import TvShowInput from "./TvShowInput";

type TvShowInputType = {
	show_name: string;
	series_watched: number;
	total_Series: number;
	last_watched: Date;
	rating: number;
};

const initialTestData: TvShowInputType[] = [
	{
		show_name: "Scrubs",
		series_watched: 11,
		total_Series: 12,
		last_watched: new Date("2019-01-16"),
		rating: 5,
	},
	{
		show_name: "How I Met Your Mother",
		series_watched: 7,
		total_Series: 7,
		last_watched: new Date("2022-12-21"),
		rating: 5,
	},
];

export default function TvShowList() {
	const [tvShowData, setTvShowData] =
		useState<TvShowInputType[]>(initialTestData);

	return (
		<div>
			<TvShowInput></TvShowInput>
			{tvShowData.map((tvShow: TvShowInputType) => {
				return <TvShowItem tvShow={tvShow}></TvShowItem>;
			})}
		</div>
	);
}
