import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import MoviesStore from 'store/moviesStore'

import { MovieItem, Loader } from 'components'

const MoviesList = observer(() => {
	const { moviesData, moviesFilterValue, filterMoviesStatus } = MoviesStore

	const filteredMovies = useMemo(() => {
		if (!moviesData) return []

		if (moviesFilterValue.trim()) {
			return moviesData.items.filter(({ title }) => title.toLowerCase().includes(moviesFilterValue.toLowerCase()))
		}

		return moviesData.items
	}, [moviesData, moviesFilterValue])

	return (
		<div className='overflow-x-auto px-4 scrollbar-none min-h-[300px] w-screen'>
			<div className='relative flex items-start gap-4 min-h-[300px] w-full'>
				{filterMoviesStatus === 'loading' ? (
					<Loader />
				) : (
					filteredMovies.map((movie, index) => <MovieItem key={`${index} ${movie.title}`} movie={movie} />)
				)}
			</div>
		</div>
	)
})

export default MoviesList
