export interface IGetMoviesResponse {
	backgrounds: IBackgroundData[]
	items: IMovie[]
}

export interface IBackgroundData {
	url: string
}

export interface IMovie {
	type: string
	title: string
	imdb_rate: number
	country: string
	year: number
	length: number
	num_seasons: number
	min_age: number
	genres: string[]
	poster: string
	keyframe: string
	is_new?: boolean
}
