
module.exports = {
    // 它支持webPack-dev-server的所有选项
    devServer: {
      disableHostCheck: true,
      host: "0.0.0.0",
      port: 8081, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
   
      // 配置多个代理
      proxy: {
        "/view_endpoint" :{
          target: "http://quantum-star-265521.appspot.com/view_endpoint",
          changeOrigin: true
        },
      }
    }
}
