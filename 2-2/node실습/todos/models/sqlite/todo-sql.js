exports.createTodoTable = () => {
  return `create table if not exists todo(todoId integer primary key autoincrement, job text)`;
};

exports.insertTodo = (job) => {
  return `insert into todo(job) values( '${job}' )`;
};

exports.selectTodos = () => {
  return `select * from todo`;
};

exports.deleteTodo = (todoId) => {
  return `delete from todo where todoId=${todoId}`;
};
