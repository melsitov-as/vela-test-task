const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  // entry: './src/index.js',

  entry: {
    main: './src/index.js',
    menuDtScroll: './src/js/scroll-script.js', // Предполагаемое имя вашего второго файла
    // ... другие точки входа
  },

  output: {
    filename: '[name].bundle.js', // Используем [name] для динамического имени файла
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    // static: './src',
    static: './dist',
    port: 8080,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Если используете React
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },

  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/mobile-menu.html',
      filename: 'mobile-menu.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/mobile-menu-2lvl.html',
      filename: 'mobile-menu-2lvl.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/mobile-menu-3lvl.html',
      filename: 'mobile-menu-3lvl.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/mobile-menu-4lvl.html',
      filename: 'mobile-menu-4lvl.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/menu-dt-catalogue.html',
      filename: 'menu-dt-catalogue.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/menu-dt-offers.html',
      filename: 'menu-dt-offers.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/menu-dt-events.html',
      filename: 'menu-dt-events.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/menu-dt-scroll.html',
      filename: 'menu-dt-scroll.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],

  devtool: 'inline-source-map',
};
