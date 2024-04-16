// webpack.config.js

module.exports = {
  // Other webpack configurations...

  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      // Add other rules for regular SCSS files if needed
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
