module.exports = {
  context: __dirname,
  entry: "./src/main.js", //the loader
  output: {
    //path: "./build/", //build to this dir
    publicPath: "/assets/", //public endpoint
    filename: "./banan.js", //name that the bundle will have
  },
  devServer: {
    //contentBase: "./build/", //serve from this folder
    //noInfo: true, //  --no-info option
    //progress: true,
    // proxy: {
    //     "*": "http://localhost:9090", //webpack dev server running on 9090
    // },
  }
};
