const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.jsx",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "use-effect.bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.m?js[x]$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
