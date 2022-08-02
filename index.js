const express = require("express");

// Задаём порт - пытаемся получить из системн. переменных или исп. знач-е по умолчанию
const PORT = process.env.PORT || 8080;

// Создаём сервер
const app = express();

// Создание маршрута для отправки запросов
app.get("/", (req, res) => {
  res.send("Работает!");
});

// Заставляем сервер слушать порт
app.listen(PORT, () => {
  console.log(`Server starten on port ${PORT}`);
});