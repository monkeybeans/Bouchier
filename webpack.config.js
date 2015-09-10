module.exports = {
  entry: {
    app: ["./src/main.js"], //the loader
  },
  output: {
    path: "./build", //build to this dir
    publicPath: "/assets/", //serve from this
    filename: "banan.js", //name that the bundle will have
  }
};
