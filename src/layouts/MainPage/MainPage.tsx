import { FC, memo, ReactNode } from 'react'

import logo from 'assets/icons/logo.svg'
import Home from 'assets/icons/home.svg'
import TV from 'assets/icons/TV.svg'
import LiveTV from 'assets/icons/liveTV.svg'
import Movie from 'assets/icons/movie.svg'
import EmptyPerson from 'assets/icons/emptyPerson.svg'
import Person from 'assets/icons/person.svg'
import Ellipse from 'assets/icons/ellipse.svg'
import Magnifier from 'assets/icons/magnifier.svg'
import { CrossFadeImage } from 'components'

interface IMainPage {
	children: ReactNode
	imageUrls: string[]
}

const MainPage: FC<IMainPage> = ({ children, imageUrls }) => (
	<div className='min-h-screen min-w-full'>
		<header className='flex relative justify-between bg-secondary h-14 w-screen px-[72px] backdrop-blur-[26px] z-10'>
			<img src={logo} alt='logo' className='w-[113px] cursor-pointer' />
			<nav className='flex items-center'>
				<a
					className='flex items-center gap-2 px-6 h-full font-normal text-2xl hover:bg-[#ffffff]/40 transition-all duration-200'
					href='#'
				>
					<img src={Home} alt='navIcon' /> Discover
				</a>
				<a
					className='flex items-center gap-2 px-6 h-full font-normal text-2xl hover:bg-[#ffffff]/40 transition-all duration-200'
					href='#'
				>
					<img src={TV} alt='navIcon' /> Live TV
				</a>
				<a
					className='flex items-center gap-2 px-6 h-full font-normal text-2xl hover:bg-[#ffffff]/40 transition-all duration-200'
					href='#'
				>
					<img src={LiveTV} alt='navIcon' /> TV Shows
				</a>
				<a
					className='flex items-center gap-2 px-6 h-full font-normal text-2xl hover:bg-[#ffffff]/40 transition-all duration-200'
					href='#'
				>
					<img src={Movie} alt='navIcon' /> Movies
				</a>
				<a
					className='flex items-center gap-2 px-6 h-full font-normal text-2xl hover:bg-[#ffffff]/40 transition-all duration-200'
					href='#'
				>
					<img src={EmptyPerson} alt='navIcon' /> My Stuff
				</a>
			</nav>
			<div className='flex items-center'>
				<span className='flex items-center justify-center h-full w-14 bg-[#ffffff]/10 mr-8 hover:bg-[#ffffff]/40 transition-all duration-200 cursor-pointer'>
					<img src={Magnifier} alt='magnifier' />
				</span>
				<span className='relative flex items-center justify-center h-full w-14 bg-[#ffffff]/10 hover:bg-[#ffffff]/40 transition-all duration-200 cursor-pointer'>
					<img src={Person} alt='person' />
					<img src={Ellipse} alt='ellipse' className='absolute top-[9px] right-[7px]' />
				</span>
			</div>
		</header>
		<main className='relative flex items-center justify-center flex-col gap-14 mt-[120px] w-screen h-full z-10'>
			{children}
		</main>
		<CrossFadeImage imageUrls={imageUrls} />
		<div className='absolute top-0 left-0 w-full h-full bg-[#232323CC]/80 z-0' />
	</div>
)

export default memo(MainPage)
