const Router = require("express");
const router = new Router();
// Получаем из контроллера функции, которые будем отрабатывать
const userController = require("../controllers/user.controller.js");

// Задаём маршруты по каждой из функций контроллера
router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getOneUser);
router.put("/user", userController.updateUser);
router.delete("/user", userController.deleteUser);

module.exports = router;