var express = require("express");
const db = require("../models/sqlite/db");
const sql = require("../models/sqlite/todo-sql");

const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  db.executeQuery(sql.selectTodos(), (err, rows) => {
    if (err) {
      res.render("index");
    } else {
      res.render("index", { todos: rows });
    }
  });
});

module.exports = router;
