/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'var(--background-primary)',
				secondary: 'var(--background-secondary)'
			}
		},
		fontFamily: {
			SourceSans: ['Source Sans Pro', 'sans-serif']
		},
		animation: {
			show: 'show 1s linear forwards',
			hide: 'hide 1s linear forwards',
			fade: 'fade 1s linear infinite'
		}
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('tailwindcss-animation-delay')]
}
