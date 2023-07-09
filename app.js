const express = require('express');
const app = express();

// Определите маршрут для главной страницы
app.get('/', (req, res) => {
  res.send('Привет, это веб-сайт!');
});

app.get('/test', (req, res) => {
  res.send('test');
});
// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});