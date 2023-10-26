const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";
const GLOBAL_CSS_REGEX = /\.global.\css$/

function setupDevtool() {
  if (IS_DEV) return 'eval'
  if (IS_PROD) return false
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: {
    main: './src/index.tsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: IS_DEV
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.jsx', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: '/node_modules/',
        loader: "ts-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'local',
                localIdentName: "[name]__[local]--[hash:base64:5]",
              }
            }
          }
        ],
        exclude: GLOBAL_CSS_REGEX
      },
      {
        test: GLOBAL_CSS_REGEX,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: setupDevtool()
}