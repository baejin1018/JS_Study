const express = require("express");
const router = express.Router();
//const tododb = require('../../models/mysql/todo');
//const tododb = require('../../models/mariadb/todo');
//const db = require('../../models/sqlite/db');
//const sql = require('../../models/sqlite/todo-sql');
const Todo = require("../../models/sequelize/todoModel");

// 할 일 리스트 조회
router.get("/", async (req, res) => {
  //const rows = await tododb.selectTodos();
  const rows = await Todo.findAll();
  res.json(rows);
});

// 할 일 추가
router.post("/", async (req, res) => {
  const { job } = req.body;
  //const result = await tododb.insertTodo(job);
  //console.log(result);
  const result = await Todo.create({ job: job });
  if (result) res.json({ result: "ok" });
  else res.json({ result: "ng" });
});

// 할 일 삭제
router.delete("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  //const result = await tododb.deleteTodo(todoId);
  //console.log(result);

  const result = await Todo.destroy({
    where: {
      todoId: todoId,
    },
  });
  if (result) res.json({ result: "ok" });
  else res.json({ result: "ng" });
});
module.exports = router;
