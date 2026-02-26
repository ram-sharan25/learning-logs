/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        solarized: {
          // Background tones
          'base03': '#002b36', // Main background
          'base02': '#073642', // Background highlights
          'base01': '#586e75', // Comments / secondary text
          'base00': '#657b83', // Body text
          'base0': '#839496',  // Primary text
          'base1': '#93a1a1',  // Optional emphasized
          'base2': '#eee8d5',  // Background highlights (light)
          'base3': '#fdf6e3',  // Background (light)
          // Accent colors
          'yellow': '#b58900',
          'orange': '#cb4b16',
          'red': '#dc322f',
          'magenta': '#d33682',
          'violet': '#6c71c4',
          'blue': '#268bd2',
          'cyan': '#2aa198',
          'green': '#859900',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Consolas"', 'monospace'],
        sans: ['"JetBrains Mono"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

