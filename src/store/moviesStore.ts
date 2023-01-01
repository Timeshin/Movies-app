import { makeAutoObservable } from 'mobx'
import MoviesService from 'services/movies.service'
import { IGetMoviesResponse } from 'types/services/moviesService.interface'

class MoviesStore {
	moviesData: IGetMoviesResponse

	moviesFilterValue = ''

	getMoviesStatus: 'error' | 'loading' | 'success' = 'loading'

	filterMoviesStatus: 'error' | 'loading' | 'success' = 'success'

	constructor() {
		makeAutoObservable(this)
	}

	*getMovies() {
		this.getMoviesStatus = 'loading'

		try {
			const response: IGetMoviesResponse = yield MoviesService.getMoviesData()

			this.moviesData = response
			this.getMoviesStatus = 'success'
		} catch (error) {
			this.getMoviesStatus = 'error'
		}
	}

	*getFilteredMovies(value: string) {
		this.filterMoviesStatus = 'loading'

		try {
			yield new Promise((res) => setTimeout(res, 1000))

			this.moviesFilterValue = value
			this.filterMoviesStatus = 'success'
		} catch (error) {
			this.filterMoviesStatus = 'error'
		}
	}
}

export default new MoviesStore()
