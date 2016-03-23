module.exports = {
    context: __dirname + "/src",
    entry: {
        a: "./entry_a.js",
        b: "./entry_b.js",
        name_c:  "./entry_c.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].js"
    },
    module : {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                }
            }
        ]
    }

}