import defaultTheme from 'tailwindcss/defaultTheme';

import daisyui from 'daisyui';
import daisyuiThemes from 'daisyui/src/theming/themes';
import animations from '@midudev/tailwind-animations';


/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Montserrat Regular"', ...defaultTheme.fontFamily.sans],
                sofia: ['"Sofia Regular"', ...defaultTheme.fontFamily.sans]
            },
            keyframes: {
                'drawersvg':{
                    '35%': {
                        opacity: 1,
                        'stroke-dashoffset': 0,
                    },
                    '65%': {
                        opacity: 1,
                        'stroke-dashoffset': 0,
                    },
                },
                'rainbowcolor': {
                    '0%': {
                        color: '#ef4444'
                    },
                    '20%': {
                        color: '#22c55e'
                    },
                    '40%': {
                        color:'#eab308'
                    },
                    '60%': {
                        color:'#3b82f6'
                    },
                    '70%': {
                        color:'#8b5cf6'
                    },
                    '100%': {
                        color:'#f43f5e'
                    }
                }
            }
        },
    },
    plugins: [
        daisyui,
        animations
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...daisyuiThemes.light,
                    primary: '#98dd09',
                    secondary: '#eab308'
                },
            }, 
            'dark'
        ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
};