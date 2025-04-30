const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Режим сборки: development или production
  mode: 'development', // или 'production' для production-сборки

  // Входная точка вашего приложения
  entry: './src/index.js',

  // Выходные настройки
  output: {
    filename: 'bundle.js', // Имя выходного JavaScript-файла
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
    clean: true, // Очищать выходную директорию перед каждой сборкой
  },

  // Настройки devServer для разработки
  devServer: {
    static: './src', // Корневая директория для статического контента
    // static: './dist', // Корневая директория для статического контента
    port: 8080, // Порт devServer
    open: true, // Автоматически открывать браузер после запуска
  },

  // Модули (loaders) для обработки различных типов файлов
  module: {
    rules: [
      // Обработка JavaScript файлов
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
      // Обработка SCSS файлов
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to separate files
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
      // Обработка CSS файлов (если есть отдельные CSS)
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Обработка HTML файлов
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // Обработка изображений и других статических активов (опционально)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[ext]', // Путь и имя для выходных файлов
        },
      },
      // Обработка шрифтов (опционально)
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
    // Плагин для генерации HTML файла
    new HtmlWebpackPlugin({
      template: './src/index.html', // Путь к вашему HTML шаблону
      filename: 'index.html', // Имя выходного HTML файла
    }),
    new HtmlWebpackPlugin({
      template: './src/header-menu.html', // Путь к вашему HTML шаблону
      filename: 'header-menu.html', // Имя выходного HTML файла
    }),
    new HtmlWebpackPlugin({
      template: './src/mobile-menu-2lvl.html', // Путь к вашему HTML шаблону
      filename: 'mobile-menu-2lvl.html', // Имя выходного HTML файла
    }),
    new HtmlWebpackPlugin({
      template: './src/mobile-menu-3lvl.html', // Путь к вашему HTML шаблону
      filename: 'mobile-menu-3lvl.html', // Имя выходного HTML файла
    }),
    new HtmlWebpackPlugin({
      template: './src/mobile-menu-4lvl.html', // Путь к вашему HTML шаблону
      filename: 'mobile-menu-4lvl.html', // Имя выходного HTML файла
    }),
    // Плагин для извлечения CSS в отдельные файлы
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Имя выходного CSS файла
    }),
  ],

  // Настройки для source maps (для облегчения отладки)
  devtool: 'inline-source-map', // Рекомендуется для разработки
};
