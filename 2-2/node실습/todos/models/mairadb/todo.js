const db = require("./db");

exports.selectTodos = async () => {
  const sql = "select * from todo";
  return await db.executeQuery(sql);
};

exports.insertTodo = async () => {
  const sql = `insert into todo(job) values(?)`;
  return await db.executeQuery(sql);
};

exports.deleteTodo = async (todoId) => {
  const sql = `delete from todo where todoId=?`;
  return await db.executeQuery(sql, [todoId]);
};
