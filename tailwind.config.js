/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				sling: {
					thickBlack: '#2F313F',
					textBlack: '#505050',
					green: '#2CAE6C',
					purple: '#1F497D',
					darkGreen: '#27ae60', // Hover state
					teal: '#1a5f7a', // Hero gradient start
					darkBlue: '#10375c', // Deep blue for footer/hero
					navy: '#0c2461', // Darkest blue
					text: '#333333',
					light: '#f8f9fa',
				},
			},
			fontFamily: {
				sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
			},
		},
	},
	plugins: [],
};
