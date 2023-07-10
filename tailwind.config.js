/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				'blue-crayola/9': '#1733B6',
				'grayscale-g-2': '#474747',
				'grayscale-g-3': '#595959',
				'grayscale-g-6': '#D6D6D6',
				'grayscale-g-8': '#F5F5F5',
				'grayscale-g-9': '#F6F6F7',
				'black-fogra': '#0A0A0A'
			}
		}
	},
	plugins: []
}
