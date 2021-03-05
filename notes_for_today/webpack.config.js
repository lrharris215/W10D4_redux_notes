//this is not the real config file. Again, too lazy to go find it. 
//I lied i found it
var path = require('path');

module.exports = {
    entry: './frontend/entry.jsx',
    output: {
        filename: './bundle.js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    // VERY important, when stealing from a/A open, to remember to change "query" to "options", bc otherwise webpack will hate you forever. 
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};
//the giant list of shit to install at the beginning of the project. 
"npm install webpack webpack-cli react react-dom redux react-redux @babel/core babel-loader @babel/preset-react @babel/preset-env"
//oh i got all this shit yesterday. but remember to install react and react-redux when doing a joint project i guess. 
