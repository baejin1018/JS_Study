var express = require("express");

//sqlLite
// const db = require("../models/sqlite/db");
// const sql = require("../models/sqlite/todo-sql");

//MariaDB
// const tododb = require("../models/mairadb/todo");

//Sequelize
const Todo = require("../models/sequelize/todoModel");
const router = express.Router();
/* GET home page. */
//SQLLite
// router.get("/", function (req, res, next) {
//   db.executeQuery(sql.selectTodos(), (err, rows) => {
//     if (err) {
//       res.render("index");
//     } else {
//       res.render("index", { todos: rows });
//     }
//   });
// });

//MariaDB
router.get("/", async (req, res) => {
  // const rows = await tododb.selectTodos();
  const rows = await Todo.findAll();
  res.render("index", { todos: rows });
});

module.exports = router;
