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

	return (
		<MainPage imageUrls={moviesData?.backgrounds.map(({ url }) => url) || []}>
			<SearchBar />
			{!moviesFilterValue && filterMoviesStatus !== 'loading' && <h2 className='text-[32px] font-bold'>in the spotlight</h2>}
			<MoviesList />
		</MainPage>
	)
})

export default App
