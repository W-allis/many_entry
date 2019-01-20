const path = require('path')
const webpack = require('webpack')


module.exports = {
    // 入口文件：有切并且多个 
    entry: {
        app: './src/main'
    },
    mode: process.env.BASE_ENV === 'production' ? 'production' :　'development',
    output: {
        // 文件名
        filename: '[name]_bundle.js',
        // 打包目录 必须为绝对路径
        path: path.resolve(__dirname, '../dist'),
        // 静态资源目录，只保存在html文件中，不另起路径
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test:　/\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                // options 参见.babellrc 文件，
                // babel-plugin-transform-runtion  babel-runtime babel-loader babel-core babel-preset-env：babellrc文件配置了env
                // 其中plugin中 transform-runtime，将一些高级语法如 generate,await,async,转换
                exclude: /node_modules/
                // include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                use:[
                    // 如果使用html-webpack-plugin 则会导致冲突
                    // 给新创建的html文件取名
                    // {
                    //     loader: 'file-loader',
                    //   
                    //     // options: {
                    //     //     name: '[name].html'
                    //     // }
                    // },
                    // 将html文件从bundle.js中剥离
                    // {
                    //     loader: 'extract-loader'
                    // },
                    // 解析html文件
                    {
                        loader: 'html-loader',
                        options: {
                            attr: ['img:src']
                        }
                    }
                ]
            },
            // 解析图片
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                use: [
                    {    
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin()
    ]
}