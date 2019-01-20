'use strict'
const fs = require('fs')
const path = require('path')

const views = path.resolve(__dirname, '../src/views')

const files = fs.readdirSync(views)

console.log(files)

const entry = {}

files.forEach(file => {
    entry[file] = `./src/views/${file}/index.js`
})

module.exports = entry 
