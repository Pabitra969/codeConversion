/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},

			colors: {
				p1: "#2EF2FF",
				p2: "#3C52D9",
				p3: "#C8EA80",
				p4: "#EAEDFF",
				p5: "#C4CBF5",
				s1: "#080D27",
				s2: "#0C1838",
				s3: "#334679",
				s4: "#1959AD",
				s5: "#263466",
				black: {
					DEFAULT: "#000000",
					100: "#05091D",
				},
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
