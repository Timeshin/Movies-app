import { FC, useState } from 'react'
import { IMovie } from 'types/services/moviesService.interface'
import { getSecondsInMinutes } from 'utils'

interface IMovieItem {
	movie: IMovie
}

interface IAttributeRate {
	rate: number
}

const AttributeRate: FC<IAttributeRate> = ({ rate }) => (
	<div className='px-2 py-1 bg-green-500 text-base w-fit font-normal rounded'>
		IMDB <span className='font-bold ml-1'>{rate}/10</span>
	</div>
)

const AttributeNew = () => <div className='px-2 py-1 bg-[#DE8B0F] text-base w-fit font-normal rounded'>New on NetUP TV</div>

const MovieItem: FC<IMovieItem> = ({
	movie: { title, poster, imdb_rate, length, country, genres, keyframe, min_age, num_seasons, year, is_new }
}) => {
	const [currentImage, setCurrentImage] = useState(poster)

	const onMouseEnterHandler = () => {
		setCurrentImage(keyframe)
	}

	const onMouseLeaveHandler = () => {
		setCurrentImage(poster)
	}

	return (
		<div className='flex flex-col items-start'>
			<div
				className='relative w-[370px] h-[210px] cursor-pointer rounded'
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
			>
				<div className='relative z-10'>
					<header className='flex items-center ml-2 mt-2 gap-4'>
						{is_new && <AttributeNew />}
						<AttributeRate rate={imdb_rate} />
					</header>
				</div>
				{[keyframe, poster].map((imageUrl) => (
					<img
						key={imageUrl}
						src={`${require(`assets/images/${imageUrl}`)}`}
						className={`absolute w-full h-full top-0 left-0 ${currentImage === imageUrl ? 'animate-show' : 'animate-hide'}`}
						alt='posterBg'
					/>
				))}
				<div className='absolute bg-[#23232380]/50 w-full h-full top-0 left-0 z-0' />
			</div>
			<div className='mt-4'>
				<h2 className='font-semibold text-2xl'>{title}</h2>
				<div className='text-[#A6A6A6] font-normal text-xl'>
					{country} | {year} | {getSecondsInMinutes(length)} minutes | {num_seasons} seasons | {min_age}+
				</div>
				<div className='text-xl'>{genres.join(', ')}</div>
			</div>
		</div>
	)
}

export default MovieItem
