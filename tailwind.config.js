/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-black': '#0a0a0a',
                'charcoal-dark': '#1a1a1a',
                'charcoal': '#2a2a2a',
                'charcoal-light': '#3a3a3a',
                'gray-dark': '#4a4a4a',
                'off-white': '#e8e8e8',
                'muted-gray': '#b8b8b8',
            },
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'body': ['Inter', 'sans-serif'],
            },
            spacing: {
                '2xl': '8rem',
            },
            transitionDuration: {
                'fast': '200ms',
                'normal': '400ms',
                'slow': '600ms',
            },
            boxShadow: {
                'subtle': '0 2px 8px rgba(0, 0, 0, 0.4)',
                'medium': '0 4px 16px rgba(0, 0, 0, 0.6)',
                'strong': '0 8px 32px rgba(0, 0, 0, 0.8)',
            },
        },
    },
    plugins: [],
}
