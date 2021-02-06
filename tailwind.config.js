module.exports = {
  theme: {
    screens: {
      xs: '280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    // PurgeCSS options
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
}
