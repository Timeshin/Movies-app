const Loader = () => (
	<div className='flex space-x-2 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
		<div className='w-3 h-3 bg-gray-500 rounded-full animate-fade animation-delay' />
		<div className='w-3 h-3 bg-gray-500 rounded-full animate-fade animation-delay-100' />
		<div className='w-3 h-3 bg-gray-500 rounded-full animate-fade animation-delay-200' />
	</div>
)

export default Loader
