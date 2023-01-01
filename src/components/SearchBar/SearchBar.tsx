import { ChangeEvent, FormEvent, useState } from 'react'
import MoviesStore from 'store/moviesStore'
import { observer } from 'mobx-react-lite'

import { Input, Button } from 'components'

import Cross from 'assets/icons/cross.svg'
import MagnifierSmall from 'assets/icons/magnifierSmall.svg'

const SearchBar = observer(() => {
	const { filterMoviesStatus, moviesFilterValue } = MoviesStore
	const [searchValue, setSearchValue] = useState('')

	const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(target.value)
	}

	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (searchValue === moviesFilterValue) return

		MoviesStore.getFilteredMovies(searchValue)
	}

	const onClickIconHandler = () => {
		setSearchValue('')
		MoviesStore.getFilteredMovies('')
	}

	return (
		<form className='max-w-[976px] w-full h-14 flex' onSubmit={onSubmitHandler}>
			<Input
				placeholder='Search'
				className='pl-6 pr-14 flex-grow-[10] flex-none border-r-0'
				iconHandler={onClickIconHandler}
				value={searchValue}
				onChange={onChangeHandler}
				endIcon={
					searchValue.length
						? {
								className: 'absolute cursor-pointer',
								icon: Cross
						  }
						: null
				}
			/>
			<Button
				className='max-w-[150px]'
				endIcon={{
					icon: MagnifierSmall,
					className: 'ml-[12px]'
				}}
				disabled={filterMoviesStatus === 'loading'}
				type='submit'
			>
				search
			</Button>
		</form>
	)
})

export default SearchBar
