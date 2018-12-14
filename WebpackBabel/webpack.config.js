module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['@babel/polyfill', './src/index.js', './src/asyncAwait.js'], // polyfill はIE11などで必要
    output: {
      path: `${__dirname}/dist`,
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };