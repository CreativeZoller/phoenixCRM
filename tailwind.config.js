/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // Enable dark mode via class
	theme: {
		extend: {
			// Define custom screen sizes for mobile-first design
			screens: {
				xs: "475px",
				// Default Tailwind screens remain: sm, md, lg, xl, 2xl
			},
		},
	},
	plugins: [],
};
