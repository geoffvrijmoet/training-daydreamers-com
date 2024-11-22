import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			main: '#f7f7f7',
  			secondary: '#1513ff',
  			accent: {
  				peach: '#FFCBBA',
  				yellow: '#FFEBB8',
  				orange: '#F6502C',
  			}
  		},
  		fontFamily: {
  			fredoka: ['var(--font-fredoka)'],
  			quicksand: ['var(--font-quicksand)'],
  		},
  	}
  },
  plugins: [],
};
export default config;
