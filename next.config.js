const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.export = withPWA({
  pwa: {
    dest: 'public',
    disble: !isProd
  }
})
