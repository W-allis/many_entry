const babel = require('babel-register')
const path = require('path')
const express = require('express') 

const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.config_dev')

const complier = webpack(config)

const file_server = webpackDevMiddleware(complier, config.devServer)
const hot_server = webpackHotMiddleware(complier)

const root = express.static('./dist')

app.use(file_server)

// 必须要在配置之下，文件之上
app.use(hot_server)

app.use(root)
// debugger
app.listen(9528, () => {
    console.log('server is running')
})
