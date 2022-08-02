const Router = require("express");
const router = new Router();
// Получаем из контроллера функции, которые будем отрабатывать
const postController = require("../controllers/post.controller.js");

// Задаём маршруты по каждой из функций контроллера
router.post("/post", postController.createPost);
router.get("/post", postController.getPostsByUsers);

module.exports = router;