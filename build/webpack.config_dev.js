const merge = require('webpack-merge')
const base = require('./webpack.config_base')
const htmlPlugin = require('html-webpack-plugin')
// const plugins = require('./plugin')

module.exports = merge(base, {
    devtool: 'source-map',
    devServer: {
        // 文件根目录
        // contentBase: './dist',
        port: 9527,
        open: true,
        // 将错误信息显示在html中
        overlay: true,
        // 热更新
        hot: true
    },
    plugins: [
        new htmlPlugin({
            template: './index.html',
            title: 'webpack_app',
            // favicon: ''
            filename: 'index.html',
            // chunks: ['app'],
            // proxy: config.dev.proxyTable
            inject: 'body'
        })
    ]
    // .concat(plugins)
})