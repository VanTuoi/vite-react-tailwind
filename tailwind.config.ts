import forms from '@tailwindcss/forms'
import animate from 'tailwindcss-animate'

import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    DEFAULT: '100%',
                    xl: '1180px'
                }
            },
            colors: {}
        }
    },
    plugins: [forms, animate]
}

export default config
