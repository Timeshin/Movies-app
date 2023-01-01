import { AxiosInstance } from 'axios'
import fetchInstance from 'config/fetchInstance.config'
import { IGetMoviesResponse } from 'types/services/moviesService.interface'

class MoviesService {
	api: AxiosInstance

	constructor(api: AxiosInstance) {
		this.api = api
	}

	async getMoviesData() {
		const { data } = await this.api.get<IGetMoviesResponse>('discover')
		await new Promise((res) => setTimeout(res, 1000))
		return data
	}
}

export default new MoviesService(fetchInstance)
