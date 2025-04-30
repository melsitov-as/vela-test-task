# vela-test-task

## Описание

Проект `vela-test-task` представляет собой тестовое задание для компании Vela.
Верстка шапки сайта с адаптивностью и скроллом.

## URLs
"https://melsitov-as.github.io/vela-test-task"
"https://melsitov-as.github.io/vela-test-task/menu-dt-catalogue.html"
"https://melsitov-as.github.io/vela-test-task/menu-dt-events.html"
"https://melsitov-as.github.io/vela-test-task/menu-dt-offers.html"
"https://melsitov-as.github.io/vela-test-task/menu-dt-scroll.html"
"https://melsitov-as.github.io/vela-test-task/mobile-menu.html"
"https://melsitov-as.github.io/vela-test-task/mobile-menu-2lvl.html"
"https://melsitov-as.github.io/vela-test-task/mobile-menu-3lvl.html"
"https://melsitov-as.github.io/vela-test-task/mobile-menu-4lvl.html"

## Примечание
Адаптивная верстка сделана на главной странице.
Скролл сделан на странице menu-dt-scroll.html на js.
Остальные страницы сделаны по-отдельности

## Установка и запуск

1.  **Клонируйте репозиторий:**
    ```bash
    git clone <URL_вашего_репозитория>
    cd vela-test-task
    ```

2.  **Установите зависимости:**
    ```bash
    npm install
    # или
    yarn install
    ```

## Доступные скрипты

В файле `package.json` определены следующие скрипты для работы с проектом:

* **`npm start` или `yarn start`**: Запускает сервер разработки Webpack. Приложение будет доступно по адресу, указанному в конфигурации Webpack Dev Server (обычно `http://localhost:8080`). Используется в режиме разработки с горячей перезагрузкой (Hot Module Replacement - HMR).

    ```bash
    npm start
    # или
    yarn start
    ```

* **`npm run build` или `yarn build`**: Собирает production-версию приложения. Оптимизированные статические файлы (HTML, CSS, JavaScript) будут сгенерированы в папке, указанной в конфигурации Webpack (обычно `dist`).

    ```bash
    npm run build
    # или
    yarn build
    ```

* **`npm run watch` или `yarn watch`**: Запускает Webpack в режиме наблюдения (watch mode). Webpack будет автоматически пересобирать проект при любых изменениях в исходных файлах. Используется в режиме разработки для автоматической сборки без перезагрузки сервера.

    ```bash
    npm run watch
    # или
    yarn watch
    ```
