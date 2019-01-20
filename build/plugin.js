const entry = require('./entry')
const htmlplugin = require('html-webpack-plugin')
const path = require('path')

const plugins = []

Object.keys(entry).forEach(file => {
    plugins.push(new htmlplugin({
        template: path.resolve(__dirname, `../src/views/${file}/index.html`),
        filename: `../dist/${file}.html`,
        chunks: [file]
    }))
})

module.exports = plugins
