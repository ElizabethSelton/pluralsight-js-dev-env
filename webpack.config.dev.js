import path from "path";

export default {
  mode: "development", //sets node environment to development
  devtool: "eval-source-map", //others to consider used to debug
  entry: "./src/index.js", //Webpack looks in this entry point file to get started and bundles from there. Can be omitted.
  output: { //creates bundle in memory and serves it to the browser. Info provided to simulate. Specified node __dirname directory will run from source folder.
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
