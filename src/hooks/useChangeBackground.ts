import { useEffect } from 'react'
import { useState } from 'react'

const useChangeBackground = (imagesUrls: string[] | undefined, intervalTime: number) => {
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

	useEffect(() => {
		if (!imagesUrls) return

		const interval = setInterval(() => {
			if (imagesUrls.length - 1 === currentImageIndex) {
				setCurrentImageIndex(0)
				return
			}

			setCurrentImageIndex((prevValue) => ++prevValue)
		}, intervalTime)

		return () => clearInterval(interval)
	}, [currentImageIndex, imagesUrls, intervalTime])

	return imagesUrls ? imagesUrls[currentImageIndex] : ''
}

export default useChangeBackground
