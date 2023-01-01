import { FC, ImgHTMLAttributes } from 'react'
import useChangeBackground from 'hooks/useChangeBackground'

interface ICrossFadeImage extends ImgHTMLAttributes<HTMLImageElement> {
	imageUrls: string[]
}

const CrossFadeImage: FC<ICrossFadeImage> = ({ imageUrls, className, ...props }) => {
	const currentImageUrl = useChangeBackground(imageUrls, 5000)

	return (
		<>
			{imageUrls.map((imageUrl) => (
				<img
					key={imageUrl}
					src={require(`assets/images/${imageUrl}`)}
					alt='background'
					className={`top-0 left-0 object-cover h-full w-full absolute ${
						currentImageUrl === imageUrl ? 'animate-show' : 'animate-hide'
					} ${className}`}
					{...props}
				/>
			))}
		</>
	)
}

export default CrossFadeImage
