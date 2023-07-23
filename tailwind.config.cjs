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
				global: {
					black: "#050505",
					white: "#fafafa",
					darkBlue: "#051124",
					lighterDarkBlue: "#1B2558",
				},
				light: {
					primary: "#77A9FA",
					secondary: "#eacefd",
					accent: "#a520de",
				},
				dark: {
					primary: "#00245F",
					secondary: "#ACA9EE",
					accent: "#740BBC",
				}
			}
		}
	}
};

module.exports = config;
