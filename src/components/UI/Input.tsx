import { FC, InputHTMLAttributes } from 'react'

interface Input extends InputHTMLAttributes<HTMLInputElement> {
	endIcon?: {
		icon: string
		className?: string
	} | null
	iconHandler?: () => void
}

const Input: FC<Input> = ({ endIcon, iconHandler, className, ...props }) => (
	<div className='relative w-full h-full flex justify-center items-center'>
		<input
			type='text'
			className={`
        w-full
        h-full
        px-6
        text-xl
        rounded-l-sm
        border-solid
        border-[1px]
      border-white
        text-black
        outline-none
        placeholder-shown:bg-secondary
      placeholder-shown:text-white
        focus:bg-white
        focus:text-black
        transition-all
        duration-150
        placeholder:text-[#6F6F6F]
        ${className}
      `}
			{...props}
		/>
		{endIcon && <img src={endIcon.icon} className={`right-7 ${endIcon.className}`} onClick={iconHandler} alt='icon' />}
	</div>
)

export default Input
