import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { MainPage } from 'layouts'
import MoviesStore from 'store/moviesStore'

import { Loader, MoviesList, SearchBar } from 'components'

const App = observer(() => {
	const { moviesData, getMoviesStatus, moviesFilterValue, filterMoviesStatus } = MoviesStore

	useEffect(() => {
		MoviesStore.getMovies()
	}, [])

	if (getMoviesStatus === 'loading') return <Loader />

	if (getMoviesStatus === 'error')
		return (
			<div className='w-screen h-screen flex items-center justify-center'>
				<h1 className='text-red-600 text-5xl'>Something went wrong :(</h1>
			</div>
		)

	return (
		<MainPage imageUrls={moviesData?.backgrounds.map(({ url }) => url) || []}>
			<SearchBar />
			{!moviesFilterValue && filterMoviesStatus !== 'loading' && <h2 className='text-[32px] font-bold'>in the spotlight</h2>}
			<MoviesList />
		</MainPage>
	)
})

export default App
