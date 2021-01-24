module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js'],
  } : {},
  theme: {
    fontFamily: {
      'sans':['Poppins'],
      'logo': ['Bebas Neue']
     },
      extend: {},
  },
  variants: {
    borderWidth:['responsive', 'hover', 'focus']
  },
  plugins: [],
}
