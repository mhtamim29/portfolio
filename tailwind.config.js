/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['"Archivo Black"', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'space-mono': ['"Space Mono"', 'monospace'],
      },
      colors: {
        background: '#f4f2ee',
        foreground: '#0a0a0a',
        muted: '#888580',
        border: '#d8d5cf',
        card: '#ebebeb',
        'card-dark': '#4c4c4c',
      },
      letterSpacing: {
        'wide-sm': '0.88px',
        'wide-md': '0.96px',
      },
    },
  },
  plugins: [],
}
