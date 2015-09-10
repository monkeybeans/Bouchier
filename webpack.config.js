module.exports = {
  context: __dirname,

  entry: "./src/main.js", //the loader

  output: {
    path: "./build/", //build to this dir
    filename: "banan.js", //name that the bundle will have
    publicPath: "/assets/", //public endpoint
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  devServer: {
    //contentBase: "./build/", //serve from this folder, but will not find index.html then.
    //noInfo: true, //  --no-info option
    //progress: true,
    // proxy: {
    //      "*": "http://localhost:9090", //webpack dev server running on 9090
    // },
  }
};
