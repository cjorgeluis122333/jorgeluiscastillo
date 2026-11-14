/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                foreground: '#ededed',
                accent: {
                    primary: '#6366f1',
                    secondary: '#22d3ee',
                    muted: '#94a3b8',
                },
            },
            fontFamily: {
                sans: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-mesh': [
                    'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.22) 0, transparent 42%)',
                    'radial-gradient(at 100% 0%, rgba(34, 211, 238, 0.14) 0, transparent 42%)',
                    'radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.18) 0, transparent 42%)',
                    'radial-gradient(at 0% 100%, rgba(34, 211, 238, 0.12) 0, transparent 42%)',
                ].join(', '),
            },
            boxShadow: {
                'glow-primary': '0 0 30px rgba(99, 102, 241, 0.3)',
                'glow-secondary': '0 0 30px rgba(34, 211, 238, 0.3)',
                'glow-sm': '0 0 15px rgba(99, 102, 241, 0.2)',
            },
        },
    },
    plugins: [],
}
