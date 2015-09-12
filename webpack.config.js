module.exports = {
  //bail: true, //don't swallow errors.
  context: __dirname,

  entry: "./src/main.js", //the loader

  output: {
    path: "./build/", //build to this dir
    filename: "banan.js", //name that the bundle will have
    publicPath: "/assets/", //public endpoint
  },

  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass!'},
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/,loader: 'babel' },
    ]
  },

  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },

  resolve: {
    //what require should include
    extensions: ['', '.js', '.jsx'],
  },

  devtool: "#inline-source-map",

  devServer: {
    contentBase: "./web/", //serve from this folder.
    //noInfo: true, //  --no-info option
    //progress: true,
    // proxy: {
    //      "*": "http://localhost:9090", //webpack dev server running on 9090
    // },
  }
};
