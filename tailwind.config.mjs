/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Atkinson", "system-ui", "sans-serif"],
			serif: ["moranga", "serif"],
			mono: ["Fira Code", "monospace"],
		},
		colors: {
			orange: "#FF6B35",
			peach: "#F7C59F",
			beige: {
				DEFAULT: "#EFEFD0",
				50: "#f9f9e7",
				500: "#EFEFD0",
			},
			blue: {
				DEFAULT: "#1A659E",
				50: "#e8f3fc",
				100: "#d9ebf9",
				200: "#bfdbf0",
				300: "#a4cbe8",
				400: "#3183c1",
				500: "#1A659E",
				700: "#004E89",
				900: "#052035",
				950: "#010f1a",
			},
		},
	},
	plugins: [],
};
