type TvShowInputType = {
	show_name: string;
	series_watched: number;
	total_Series: number;
	last_watched: Date;
	rating: number;
};

type props = {
	tvShow: TvShowInputType;
};

export default function TvShowItem({ tvShow }: props) {
	const { show_name, series_watched, total_Series, last_watched, rating } =
		tvShow;

	let convertlastWatched = last_watched.toDateString();

	return (
		<div>
			<h3>{show_name}</h3>
			<p>
				Series: {series_watched} / {total_Series}
			</p>
			<p>Last Watched: {convertlastWatched}</p>
			<p>{rating} / 5</p>
		</div>
	);
}
