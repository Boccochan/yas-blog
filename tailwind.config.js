module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    screens: {
      xs: '280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      'blog-summary-md': '300px',
      'blog-summary': '600px',
      'blog-list-md': '260px',
      'blog-list-xs': '240px',
      'blog-nav-md': '320px',
      'blog-nav-xs': '300px',
    },
    extend: {
      width: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
      },
    },
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
