import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	endIcon?: {
		icon: string
		className?: string
	} | null
}

const Button: FC<IButton> = ({ children, className, endIcon, ...props }) => (
	<button
		type='button'
		className={`bg-primary border-none flex items-center justify-center w-full h-full text-xl text-[#ABFFCE] rounded-r-sm ${className}`}
		{...props}
	>
		{children}
		{endIcon && <img src={endIcon.icon} className={endIcon.className} alt='buttonIcon' />}
	</button>
)

export default Button
