const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },
  // Alterar diretório da aplicação estática
  // basePath: '/igateway',
/*
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }, // Change this to specific domain for better security
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
          }
        ]
      }
    ]
  }
*/
}
