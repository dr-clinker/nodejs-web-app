# Используйте подходящий базовый образ Node.js
FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Копирование исходного кода приложения в образ
COPY *.js .

# Определение команды запуска приложения
CMD ["node", "app.js"]