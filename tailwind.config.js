/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        solarized: {
          // Background tones (theme-aware via CSS custom properties)
          'base03': 'var(--color-bg)',
          'base02': 'var(--color-bg-secondary)',
          'base01': 'var(--color-bg-tertiary)',
          'base00': 'var(--color-text-secondary)',
          'base0': 'var(--color-text)',
          'base1': 'var(--color-text-emphasized)',
          'base2': 'var(--color-bg-secondary)',
          'base3': 'var(--color-bg)',
          // Accent colors (same in both themes)
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
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Consolas"', 'monospace'],
        sans: ['"JetBrains Mono"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

