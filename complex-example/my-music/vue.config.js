module.exports = {
  productionSourceMap: false,
  css: {
      extract: false,
  },  
  configureWebpack: {
    devServer: {
      port: 8080,
      disableHostCheck: true
    }
  }
}
