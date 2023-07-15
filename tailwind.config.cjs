const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				secondary: {
					50: '#F2F2F2',
					100: '#E6E6E6',
					200: '#C2C2C2',
					300: '#9D9D9D',
					400: '#525252',
					500: '#070707',
					600: '#060606',
					700: '#040404',
					800: '#030303',
					900: '#020202'
				}
			}
		}
	}
};

module.exports = config;
