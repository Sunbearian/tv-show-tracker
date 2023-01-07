import "./TvShowItem.css";

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

	async function onClick() {
		deleteShow();
	}

	return (
		<div className="tv-show-item">
			<h3>{show_name}</h3>
			<p>
				Series: {series_watched} / {total_series}
			</p>
			<p>Last Watched: {last_watched}</p>
			<p>{rating} / 5</p>
			<button onClick={onClick}>🗑️</button>
		</div>
	);
}
