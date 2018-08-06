
var webpack = require('webpack');

module.exports = env => {

    var APP_TYPE = env.APP_TYPE;
    var outputFilename = '';
    var entryFileName = '';

    if (APP_TYPE === 'main-app') {

        outputFilename = 'main_app_bundle.js';
        entryFileName = 'main.js';
    } else if (APP_TYPE === 'home-app') {

        outputFilename = 'home_app_bundle.js';
        entryFileName = 'screens/home-app/index.js';
    } else if (APP_TYPE === 'sections-app') {

        outputFilename = 'sections_app_bundle.js';
        entryFileName = 'screens/sections/index.js';
    } else if (APP_TYPE === 'section-app') {

        outputFilename = 'section_app_bundle.js';
        entryFileName = 'screens/section/index.js';
    }

    console.warn(outputFilename);
    console.warn(entryFileName);

    return {
        entry: "./src/" + entryFileName,
        output: {
            path: __dirname + '/public/build/',
            publicPath: "build/",
            filename: outputFilename
        },
        resolveLoader: {
            moduleExtensions: ["-loader"]
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: [/node_modules/, /public/]
                },
                {
                    test: /\.css$/,
                    loaders: "style-loader!css-loader!postcss-loader",
                    exclude: [/node_modules/, /public/]
                },
                {
                    test: /\.scss$/,
                    loaders: "style-loader!css-loader!postcss-loader!sass-loader",
                    exclude: [/node_modules/, /public/]
                },
                {
                    test: /\.gif$/,
                    loader: "url-loader?limit=10000&mimetype=image/gif"
                },
                {
                    test: /\.jpg$/,
                    loader: "url-loader?limit=10000&mimetype=image/jpg"
                },
                {
                    test: /\.png$/,
                    loader: "url-loader?limit=10000&mimetype=image/png"
                },
                {
                    test: /\.svg/,
                    loader: "url-loader?limit=26000&mimetype=image/svg+xml"
                },
                {
                    test: /\.jsx$/,
                    loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
                    exclude: [/node_modules/, /public/]
                },
                {
                    test: /\.wav$/,
                    loader: 'file-loader'
                },
                {
                    enforce: "pre",
                    test: [/\.js$/, /\.jsx$/],
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        fix: false
                    }
                },
                {
                    test: /\.json$/,
                    loader: "json-loader"
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                'log': __dirname + '' + '/plugins/logger.js'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('dev'),
                    'APP_TYPE': JSON.stringify(APP_TYPE),
                }
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                children: true,
                async: true,
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin()
        ]
    };
};
