module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'||process.env.NODE_ENV === 'test'
    ? '/explo-wx/'
    : '/',
    outputDir:"explo-wx",
    devServer: {
      port: 8001
      // proxy: 'http://localhost:8080'
    },
    productionSourceMap: false
  }