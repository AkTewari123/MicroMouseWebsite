import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
  	container: {
  		padding: '2rem',
  		screens: {
  			partTwoScreen: {
  				max: '1200px'
  			},
  			partTwoScreenTwo: {
  				max: '1000px'
  			},
  			macBook: {
  				max: '1550px',
  				min: '1250px'
  			},
  			macBookTwo: {
  				max: '1250px',
  				min: '710px'
  			},
  			macBookFin: {
  				max: '709px'
  			},
  			partTwoScreenThree: {
  				max: '900px'
  			},
  			laptop: {
  				min: '1000px'
  			},
  			questionScreen: {
  				max: '800px'
  			},
  			tablet: {
  				min: '638px',
  				max: '900px'
  			},
  			homeScreenOne: {
  				min: '800px',
  				max: '1021px'
  			},
  			marginOne: {
  				min: '800px',
  				max: '1263px'
  			},
  			smtablet: {
  				min: '600px',
  				max: '799px'
  			},
  			phone: {
  				max: '637px'
  			},
  			smphone: {
  				max: '575px'
  			},
  			smallScreen: {
  				max: '410px'
  			},
  			smScreen: {
  				max: '991px'
  			},
  			profileNavScreen: {
  				max: '822px'
  			},
  			buttonScreen: {
  				max: '767px'
  			},
  			gridOne: {
  				max: '1250px'
  			},
			other: {
				min:'375px'
			}
  		}
  	},
  	extend: {
  		backgroundImage: {
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config