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
    extend: {},
  },
  variants: {
    borderWidth:['responsive', 'hover', 'focus']
  },
  plugins: [],
}
