import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
        'partTwoScreen': {'max': '1200px'},
        'partTwoScreenTwo': {'max': '1000px'},
        'macBook': {'max':'1550px', 'min':'1250px'},
        'macBookTwo': {'max':'1250px', 'min':'710px'},
        'macBookFin': {'max':'709px'},
        'partTwoScreenThree': {'max': '900px'},
        'laptop': {'min': '1000px'}, 
        'remyScreen': {"max": "1100px"},
        'questionScreen': {"max": "800px"},
        'tablet': {'min': '800px', 'max': '999px'},

        'smtablet': {'min': '600px', 'max': '799px'},
        // => @media (max-width: 1023px) { ... }
  
        'phone': {'min':'300px', 'max': '599px'},
        // => @media (max-width: 767px) { ... }
  
        'smphone': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        sans: ['var(--font-phosphate)']
      }, 
      colors: {
        "lightBlue": '#5FC3E4',
        'blackGood': '#2B2B2C',
        'silverBord': "#5E5E5F",
        'greyGood': '#E8EAEC',
        'discordPurp': '#5864F2',
        'sheetsGreen': '#1FA463',
        'formPurp': "#7248B9",
        "youtubeRed": "#FF0000",
        "tcnjBlue": "#474E7D",
        "autodeskYellow": "#FAC52D",
        "ieeeGreen": "#27C2A0",
        "lightRed": "#E55D76"

      }
    },
  },
  plugins: [],
};
export default config;
