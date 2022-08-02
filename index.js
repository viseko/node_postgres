const express = require("express");
// Роутеры
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

// Задаём порт - пытаемся получить из системн. переменных или исп. знач-е по умолчанию
const PORT = process.env.PORT || 8080;

// Создаём сервер
const app = express();

// Добавляем middleware для парсинга json
app.use(express.json())
// Регистрация роутеров
app.use("/api", userRouter);
app.use("/api", postRouter);

// Заставляем сервер слушать порт
app.listen(PORT, () => {
  console.log(`Server starten on port ${PORT}`);
});