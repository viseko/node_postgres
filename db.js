// Получаем класс пула из пакета PG
const Pool = require("pg").Pool;
// .. и создаём его экземпляр, с пом-ю которого будем делать запросы к БД
const pool = new Pool({
  user: "postgres",
  password: "root", // <- пароль, заданный при установке СУБД
  host: "localhost",
  port: 5432,
  database: "node_postgres" // <- имя БД
});

// Экспортируем пул для использования в других модулях
module.exports = pool;