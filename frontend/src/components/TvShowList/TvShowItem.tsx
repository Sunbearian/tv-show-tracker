import "./TvShowItem.css";

type TvShowInputType = {
	show_name: string;
	series_watched: number;
	total_series: number;
	last_watched: Date;
	rating: number;
};

type props = {
	tvShow: TvShowInputType;
};

export default function TvShowItem({ tvShow }: props) {
	const { show_name, series_watched, total_series, last_watched, rating } =
		tvShow;

	let convertLastWatched = last_watched.toDateString();

	return (
		<div className="tv-show-item">
			<h3>{show_name}</h3>
			<p>
				Series: {series_watched} / {total_series}
			</p>
			<p>Last Watched: {convertLastWatched}</p>
			<p>{rating} / 5</p>
		</div>
	);
}
