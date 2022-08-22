const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*',
      },
    ]
  },
}

